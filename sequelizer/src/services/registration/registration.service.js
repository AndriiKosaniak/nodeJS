const {UserModel} = require("../../dataBase/models");


const setUser = (user) => {
         return UserModel.create(user)
    };

module.exports = {setUser};
