const User = require('./user');
const Result = require('./result');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
				return res.status(400).json({ message: `Username ${username} already taken` });
			}

			candidate = await User.findOne({ email });
			if (candidate) {
				return res.status(400).json({ message: `Another account is using ${email}` });
			}

			const hash = bcrypt.hashSync(password, 9);
			const user = new User({ username, email, password: hash });
			await user.save();

			return res.json({ message: 'User registered succsessfully' });

		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Registration error: ' + e });
		}
	}

	async login(req, res) {
		try {
			const username = req.body.username.toLowerCase();
			const password = req.body.password;

			const user = await User.findOne({
				$or: [
					{ username: username },
					{ email: username }
				]
			});
			if (!user) {
				res.status(404).json({ message: 'Account not found' });
			}

			const isPwdValid = bcrypt.compareSync(password, user.password);;
			if (!isPwdValid) {
				res.status(400).json({ message: 'Wrong password' });
			}

			const token = jwt.sign({ username: user.username }, secrets.jwtSecret, { expiresIn: '3d' });

			return res.json({
				token,
				username: user.username
			});

		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Login error: ' + e });
		}
	}

	async auth(req, res) {
		try {
			const user = await User.findOne({ username: req.username });
			const token = jwt.sign({ username: user.username }, secrets.jwtSecret, { expiresIn: '3d' });
			return res.json({
				token,
				username: user.username,
				//email: user.email
			});
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Auth error: ' + e });
		}
	}

	async get(req, res) {
		try {
			const results = await Result.find({ username: req.username, questionCount: +req.query.questionCount })
				.select('result date -_id');

			return res.json(results);
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Auth error: ' + e });
		}
	}

	async set(req, res) {
		try {
			const date = req.body.date;
			const result = req.body.result;
			const questionCount = req.body.questionCount;

			const dbResult = new Result({ username: req.username, questionCount, result, date });
			await dbResult.save();

			return res.json({ message: 'Result saved' });

		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Result saving error: ' + e });
		}
	}

	async leaders(req, res) {
		try {
			const questionCount = +req.query.questionCount;
			const leaders = await Result.aggregate(
				[
					{
						'$match': {
							'questionCount': questionCount
						}
					}, {
						'$group': {
							'_id': '$username',
							'result': {
								'$min': {
									'result': '$result',
									'date': '$date',
									'username': '$username'
								}
							}
						}
					}, {
						'$replaceRoot': {
							'newRoot': '$result'
						}
					}
				]);

			return res.json(leaders);
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Result saving error: ' + e });
		}
	}
}

module.exports = new controller();
