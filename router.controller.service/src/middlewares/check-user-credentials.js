const {usersArray, isLogged, thisUser} = require('../dataBase/users.database');


module.exports = (req, res, next) => {
    try {
        usersArray.forEach(user => {
            if (user.username !== thisUser.username && user.password !== thisUser.password) {
                throw new Error('Please double-check your credentials');
            }

            next();
        });
    } catch (err) {
        res.status(400).json(err.message);
    }
}


// router -> middlewares -> controller (helpers) -> services
