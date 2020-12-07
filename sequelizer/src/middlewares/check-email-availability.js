const {userService} = require('./../services/')
const db = require('../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {email} = req.body;
        const foundUser = await userService.getUserByEmail(email);

        if(foundUser[0]){
            throw new Error('This email is already taken');
        }

        next();
    }
     catch (err) {
        res.status(400).json(err.message);
    }
};
