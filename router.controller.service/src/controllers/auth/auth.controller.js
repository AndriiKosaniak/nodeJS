const authService = require('../../services/auth/auth.service')

module.exports = {

    signupUser: (req, res) => {
        try {
            authService.setUser(req.body);

            res.status(201).redirect('/users');
        }
        catch (error) {
            res.json(error.message);
        }

    },


    authorizeUser: (req, res) => {
        try {
            console.log(req.login)
            authService.loginUser(thisUser)

            res.status(200).redirect('/users');
        }
        catch {error} {
        res.json(error.message);
        }
    }


};
