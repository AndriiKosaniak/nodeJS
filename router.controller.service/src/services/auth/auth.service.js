const fs = require('fs-extra');

const pathToFile = require("../../constants");
const dataBase = require('../../dataBase/users.json');


const setUser = (user) => {

    dataBase.push(user);
    console.log('service', dataBase)
    fs.writeFileSync(pathToFile, JSON.stringify(dataBase), err => {
        if (err) throw err;
    });

};
const logoutUser = (req, res) => {
    req.login = false
};
const loginUser = (req, res) => {
    req.login = true
};

module.exports = {
        setUser,
        logoutUser,
        loginUser
};
