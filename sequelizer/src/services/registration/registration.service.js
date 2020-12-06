const {UserModel} = require("../../dataBase/models");

const registrationService = {
    setUser: (user) => {
        return UserModel.create(user)
    }
}


module.exports = registrationService;
