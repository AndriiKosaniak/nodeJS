const {usersArray, isLogged, thisUser, methods} = require('../../dataBase/users.json');
const authController = require("../../controllers/auth/auth.controller");
const checkUserCredentials = require('../../middlewares/check-user-credentials');
const checkEmailAvailabilty = require('../../middlewares/check-email-availability');

const {Router} = require('express');

const authRouter = Router();

authRouter.get('/signup', (req, res) => {
    res.render('signup');
});

authRouter.get('/login', (req, res) => {
    res.render('login');
});

authRouter.get('/logout', ((req, res) => {
    methods.logoutUser();
    res.redirect('/');
}));

authRouter.post('/signup', checkEmailAvailabilty, authController.signupUser);

authRouter.post('/login', checkUserCredentials, authController.authorizeUser);



module.exports = authRouter;
