const {usersArray, isLogged, thisUser} = require('../dataBase/users.json');


module.exports = (req, res, next) => {
    try {
        const thisUser = req.body;
        const isLogged = false

        usersArray.forEach(user => {
            if (user.username !== thisUser.username && user.password !== thisUser.password) {
                throw new Error('Please double-check your credentials');
            }

            req.login = isLogged;

            next();
        });
    } catch (err) {
        res.status(400).json(err.message);
    }
}


// router -> middlewares -> controller (helpers) -> services
