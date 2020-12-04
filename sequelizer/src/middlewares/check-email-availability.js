

const dataBase = require('../dataBase/');

module.exports = (req, res, next) => {
    try {
        const {email} = req.body;


            const resStatus = users.find(user => user.email === email);

            if(resStatus){
                throw new Error('This email is already taken');
            }

        next();
    }
     catch (err) {
        res.status(400).json(err.message);
    }
};
