const {Router} = require('express');

const {usersController} = require("../../controllers");


const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.render('users');
})

usersRouter.post('/', usersController.getUsers);

module.exports = usersRouter;
