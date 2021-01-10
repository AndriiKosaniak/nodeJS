const path = require('path');
const uuid = require('uuid').v1();
const fs = require('fs-extra');
const {
    authService, emailService, userService, oauthService, logService
} = require('../../services');
const { responseCodes: { OK, NOT_CONTENT } } = require('../../configs');
const { tokenizer } = require('../../helpers');
const { emailActions: { WELCOME } } = require('../../configs');
const { passwordHelper: { hash } } = require('../../helpers');
const { constants: { AUTHORIZATION, USER_CREATED } } = require('../../configs');
const transactionInstance = require('../../dataBase/create-transaction');

const authController = {
    registerUser: async (req, res, next) => {
        const t = await transactionInstance();

        try {
            const { avatar, body: { username, password, email } } = req;

            const hashedPassword = await hash(password);

            Object.assign(req.body, { password: hashedPassword });
            const user = await authService.createUser(req.body, t);

            if (avatar) {
                const pathWithoutPublic = path.join('users', `${user.id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'public', pathWithoutPublic);
                const fileExt = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExt}`;
                const finalPhotoPath = path.join(pathWithoutPublic, photoName);

                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(path.join(photoDir, photoName));

                await userService.updateUser(user.id, { avatar: finalPhotoPath }, t);
            }

            await emailService.sendMail(email, WELCOME, { userName: username });
            await logService.createLog({ userId: user.id, action: USER_CREATED });

            await t.commit();

            res.json(user);
        } catch (e) {
            await t.rollback();
            next(e);
        }
    },

    loginUser: async (req, res, next) => {
        try {
            const { id } = req.user;

            const token_pair = tokenizer();

            await oauthService.createTokenPair({ user_id: id, ...token_pair });

            await res.status(OK).json(req.user);
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            await oauthService.deleteToken(token);

            res.json(NOT_CONTENT);
        } catch (e) {
            next(e);
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            await oauthService.deleteToken(token);

            const token_pair = tokenizer();
            await oauthService.createTokenPair({ user_id: req.user.id, ...token_pair });
        } catch (e) {
            next(e);
        }
    }
};

module.exports = authController;
