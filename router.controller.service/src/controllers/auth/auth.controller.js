const authService = require('../../services/auth/auth.service')
const {thisUser} = require('../../dataBase/users.database');

const {pathToFile} = require('../../constants')

module.exports = {

    signupUser: (req, res) => {
        authService.setUser(req.body);

        res.status(201).redirect('/users');
    },

    authorizeUser: (req, res) => {
        authService.loginUser(thisUser)

        res.status(201).redirect('/users');
}

};
