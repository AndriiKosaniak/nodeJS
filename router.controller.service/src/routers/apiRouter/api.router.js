const {Router} = require('express');

const authRouter = require('../auth');
const usersRouter = require('../users');


const apiRouter = Router();

apiRouter.get('/', (req, res) => {
    res.render('main');
});

apiRouter.get('/error', (req, res) => {
    res.render('error');
});

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', usersRouter);


module.exports = apiRouter;
