const User = require('./user');
const Result = require('./result');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('./mailer');
const secrets = require('/etc/secrets/secrets');
const { validationResult } = require('express-validator');

class controller {
	async signup(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Invalid request', errors });
			}

			const username = req.body.username.toLowerCase();
			const email = req.body.email.toLowerCase();
			const password = req.body.password;

			let candidate = await User.findOne({ username });
			if (candidate) {
				return res
					.status(400)
					.json({ message: `Username '${username}' already taken` });
			}

			candidate = await User.findOne({ email });
			if (candidate) {
				return res
					.status(400)
					.json({ message: `Another account is using '${email}'` });
			}

			const hash = bcrypt.hashSync(password, 9);
			await new User({ username, email, password: hash }).save();

			return res.json({ message: 'User registered' });
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}

	async sigin(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Invalid request', errors });
			}

			const username = req.body.username.toLowerCase();
			const password = req.body.password;

			const user = await User.findOne({
				$or: [{ username: username }, { email: username }],
			});

			if (!user) {
				return res.status(404).json({ message: 'Account not found' });
			}

			const isPwdValid = bcrypt.compareSync(password, user.password);
			if (!isPwdValid) {
				return res.status(400).json({ message: 'Wrong password' });
			}

			const token = jwt.sign({ username: user.username }, secrets.jwtSecret, {
				expiresIn: '3d',
			});

			return res.json({
				token,
				username: user.username,
			});
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}

	async reset(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Invalid request', errors });
			}

			const email = req.body.email.toLowerCase();
			const user = await User.findOne({ email: email });

			if (!user) {
				return res.status(404).json({ message: 'Email not found' });
			}

			const token = jwt.sign({ email: user.email }, secrets.jwtSecret, {
				expiresIn: '1h',
			});

			await sendEmail(email, `https://arith.ru/password?token=${token}`);

			return res.json({ message: 'Password reset link sent to your email' });
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}

	async password(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Invalid request', errors });
			}

			const { email } = jwt.verify(req.body.token, secrets.jwtSecret);
			const passwordHash = bcrypt.hashSync(req.body.password, 9);

			await User.findOneAndUpdate({ email: email }, { password: passwordHash });

			return res.json({ message: 'Password changed' });
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}

	async auth(req, res) {
		try {
			const user = await User.findOne({ username: req.username });
			const token = jwt.sign({ username: user.username }, secrets.jwtSecret, {
				expiresIn: '3d',
			});

			return res.json({
				token,
				username: user.username,
			});
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}

	async get(req, res) {
		try {
			const results = await Result.find({
				username: req.username,
				questionCount: +req.query.questionCount,
			}).select('result date -_id');

			return res.json(results);
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}

	async set(req, res) {
		try {
			const username = req.username;
			const date = req.body.date;
			const result = req.body.result;
			const questionCount = req.body.questionCount;

			await new Result({
				username,
				questionCount,
				result,
				date,
			}).save();

			return res;
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}

	async leaders(req, res) {
		try {
			const questionCount = +req.query.questionCount;
			const leaders = await Result.aggregate([
				{
					$match: {
						questionCount: questionCount,
					},
				},
				{
					$group: {
						_id: '$username',
						result: {
							$min: {
								result: '$result',
								date: '$date',
								username: '$username',
							},
						},
					},
				},
				{
					$sort: {
						result: 1,
						date: 1,
					},
				},
				{
					$replaceRoot: {
						newRoot: '$result',
					},
				},
			]);

			return res.json(leaders);
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'Internal Server Error', details: err.message });
		}
	}
}

module.exports = new controller();
