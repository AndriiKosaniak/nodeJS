const fs = require('fs-extra');
const pathToFile = require("../constants");

module.exports = (req, res, next) => {
    try {
        const {email} = req.body;
        fs.readFile(pathToFile, ((err, data) => {
            if(err) throw err;


            const usersArray = JSON.parse(data);

            console.log('middleware', usersArray)

            console.log('email', email);

            const resStatus = usersArray.find(user => user.email === email);

            console.log('resStatus', resStatus);

            if(resStatus){
               return res.redirect('/error');
            }
        }));

        next();
    }
     catch (err) {
        res.status(400).json(err.message);
    }
}
