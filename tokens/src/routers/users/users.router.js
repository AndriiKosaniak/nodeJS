const { Router } = require('express');

const { usersController } = require('../../controllers');
const { checkEmailAvailability, validateUser, checkAccessToken } = require('../../middlewares');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id', usersController.getUserById);
usersRouter.put('/:id', checkAccessToken, validateUser.userUpdateValidator, checkEmailAvailability, usersController.updateUser);
usersRouter.delete('/', checkAccessToken, usersController.deleteUser);

module.exports = usersRouter;
