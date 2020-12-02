const fs = require('fs-extra');
const pathToFile = require("../constants");

const {usersArray, thisUser} = require('../dataBase/users.json');

module.exports = (req, res, next) => {
    try {
        const {email} = req.body;
        fs.readFile(pathToFile, ((err, data) => {
            if(err) throw err;

            const usersArray = JSON.parse(data);

            const resStatus = usersArray.find(user => user.email === email);

            if(resStatus){
                throw new Error('This email is already taken');
            }
        }));

        next();
    }
     catch (err) {
        res.status(400).json(err.message);
    }
}
