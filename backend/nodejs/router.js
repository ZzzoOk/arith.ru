const Router = require('express');
const router = new Router();
const controller = require('./controller');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/auth.middleware');

router.post(
	'/signup',
	[
		check('username', 'Invalid username').isAlphanumeric(),
		check('email', 'Invalid email').isEmail(),
		check('password', 'Invalid password').isLength({ min: 6, max: 12 }),
	],
	controller.signup,
);
router.post(
	'/signin',
	[
		check('username', 'Invalid username').isAlphanumeric(),
		check('password', 'Invalid password').isLength({ min: 6, max: 12 }),
	],
	controller.sigin,
);
router.post(
	'/reset',
	check('email', 'Invalid email').isEmail(),
	controller.reset,
);
router.post(
	'/password',
	[
		check('token', 'Invalid token').notEmpty(),
		check('password', 'Invalid password').isLength({ min: 6, max: 12 }),
	],
	controller.password,
);
router.get('/auth', authMiddleware, controller.auth);
router.get('/get', authMiddleware, controller.get);
router.post('/set', authMiddleware, controller.set);
router.get('/leaders', controller.leaders);

module.exports = router;
