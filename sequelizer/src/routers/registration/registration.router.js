const registrationController = require("../../controllers/");
const checkEmailAvailability = require('../../middlewares/check-email-availability');

const {Router} = require('express');

const registrationRouter = Router();

registrationRouter.post('/', checkEmailAvailability, registrationController.registerUser());

module.exports = registrationRouter;
