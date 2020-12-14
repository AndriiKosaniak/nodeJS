const {authController} = require("../../controllers/");
const checkEmailAvailability = require('../../middlewares/check-email-availability');
const checkUserCredentials = require('./../../middlewares/check-user-credentials')

const {Router} = require('express');

const authRouter = Router();

authRouter.post('/register', checkEmailAvailability, authController.registerUser);
authRouter.post('/login', checkUserCredentials, authController.loginUser);

module.exports = authRouter;
