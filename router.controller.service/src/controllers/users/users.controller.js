const {pathToFile} = require('../../constants');
const {usersArray, isLogged, thisUser} = require('../../dataBase/users.json');

module.exports = {
    getUsers: (req, res) => {
        if(!isLogged){
            return res.redirect('/error');
        }

        fs.readFile(pathToFile, ((err, data) => {
            if(err){
                res.redirect('/error');
            }
            const users = JSON.parse(data);
            return res.render('users', {thisUser, users, isLogged});
        }));
    },

};
