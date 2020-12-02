const {usersArray, thisUser} = require('../dataBase/users.database');

module.exports = (req, res, next) => {
    try {
        const resStatus = usersArray.find(user => user.email === thisUser.email);
        if(resStatus){
            throw new Error('This email is already taken');
        }
        next();
    }
     catch (err) {
        res.status(400).json(err.message);
    }
}
