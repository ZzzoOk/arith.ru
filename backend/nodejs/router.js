const Router = require('express');
const router = new Router();
const controller = require('./controller');
const {check} = require('express-validator');
const authMiddleware = require('./middleware/auth.middleware');

router.post('/signup',
    [
        check('username', 'Invalid username').isAlphanumeric(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Invalid password').isLength({min: 6, max: 12}),
    ],
    controller.signup);

router.get('/auth', authMiddleware, controller.auth);
router.post('/login', controller.login);
router.get('/get', authMiddleware, controller.get);
router.post('/set', authMiddleware, controller.set);
router.get('/leaders', controller.leaders);

module.exports = router;
