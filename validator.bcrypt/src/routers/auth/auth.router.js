const {authController} = require("../../controllers/");
const {checkEmailAvailability, checkUserCredentials, validateUser} = require('../../middlewares/');
const {Router} = require('express');

const authRouter = Router();

authRouter.post('/register', validateUser.registrationValidator, checkEmailAvailability, authController.registerUser);
authRouter.post('/login', checkUserCredentials, authController.loginUser);

module.exports = authRouter;
