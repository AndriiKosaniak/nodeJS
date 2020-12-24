const { Router } = require('express');
const { authController } = require('../../controllers');
const {
    checkEmailAvailability, checkUserCredentials, validateUser, checkAccessToken, checkRefreshToken, checkFile, checkAvatar
} = require('../../middlewares');

const authRouter = Router();

authRouter.post('/register',
    validateUser.registrationValidator,
    checkEmailAvailability,
    checkFile,
    checkAvatar,
    authController.registerUser);
authRouter.post('/login', checkUserCredentials, authController.loginUser);
authRouter.post('/logout', checkAccessToken, authController.logoutUser);
authRouter.post('/refresh', checkRefreshToken, authController.refreshToken);

module.exports = authRouter;
