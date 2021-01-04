const path = require('path');
const uuid = require('uuid').v1();
const fs = require('fs-extra');
const { passwordHelper } = require('../../helpers');
const { userService } = require('../../services');
const { responseCodes: { OK, NOT_CONTENT } } = require('../../configs');
const { emailService } = require('../../services');
const { emailActions: { DELETE } } = require('../../configs');

const userController = {
    getUsers: async (req, res, next) => {
        try {
            const users = await userService.getUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await userService.getUserById(id);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { avatar, params: { id }, body: { newData } } = req;

            await passwordHelper.hash(newData.password);

            await userService.updateUser(id, newData);

            if (avatar) {
                const pathWithoutPublic = path.join('users', `${id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExt = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExt}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);

                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(path.join(photoDir, photoName));

                await userService.updateUser(id, { avatar: finalPhotoPath });
            }

            res.status(OK).json('Updated successfully');
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { username, email } = await userService.getUserById(id);

            await emailService.sendMail(email, DELETE, { userName: username });

            const userForDeletePath = path.join(process.cwd(), 'public', 'users', `${id}`);

            await fs.rmdir(userForDeletePath, { recursive: true });


            await userService.deleteUser(id);

            res.status(NOT_CONTENT);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = userController;
