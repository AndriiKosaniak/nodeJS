const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

require('dotenv').config();
const {
    usersRouter, authRouter, carsRouter, shopRouter
} = require('./routers');
const { sequelize } = require('./dataBase/index');

const { config: { APP_PORT }, constants: { PUBLIC_PATH } } = require('./configs');

const app = express();

// eslint-disable-next-line no-use-before-define
_connectDB();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(PUBLIC_PATH));

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/cars', carsRouter);
app.use('/shop', shopRouter);

app.use('*', (error, req, res, next) => {
    res.status(error.code || 500).json({
        message: error.message,
        ok: false
    });
});

sequelize.sync({ alter: false })
    .then(() => app.listen(5000, (err) => err && console.log(err) || console.log(`Listen ${APP_PORT}`)))
    .catch(console.log);

// eslint-disable-next-line no-underscore-dangle,no-unused-vars
function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/DB', { useNewUrlParser: true });
    const connect = mongoose.connection;

    connect.on('error', (error) => {
        console.log(error);
    });
}
