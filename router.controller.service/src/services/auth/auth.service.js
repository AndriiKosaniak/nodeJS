const {thisUser, isLogged, usersArray} = require('../../dataBase/users.database');
const fs = require('fs-extra');
const pathToFile = require("../../constants");
const res = require("express");

const setUser = (user) => {
    thisUser = user;

    usersArray.push(thisUser);

};
const logoutUser = () => {
    isLogged = false
};
const loginUser = () => {
    isLogged = true
};

module.exports = {
        setUser,
        logoutUser,
        loginUser
};
