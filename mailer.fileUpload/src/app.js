const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const { usersRouter, authRouter, carsRouter } = require('./routers');
const { sequelize } = require('./dataBase/index');

const { config: { APP_PORT }, constants: { PUBLIC_PATH } } = require('./configs');

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(PUBLIC_PATH));

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/cars', carsRouter);

app.use('*', (error, req, res, next) => {
    res.status(error.code || 500).json({
        message: error.message,
        ok: false
    });
});

sequelize.sync({ alter: false })
    .then(() => app.listen(5000, (err) => err && console.log(err) || console.log(`Listen ${APP_PORT}`)))
    .catch(console.log);
