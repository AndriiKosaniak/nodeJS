const express = require('express');

const {usersRouter, registrationRouter} = require("./routers");
const {sequelize} = require('./dataBase/index');

const port = 5000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRouter);
app.use('/register', registrationRouter);

app.use('*', (error, req, res, next) => {
    res.status(error.code).json({
        message: error.message,
        ok: false
    })
});


sequelize.sync({alter: true})
    .then(() => app.listen(5000, err => err && console.log(err) || console.log(`Listen ${port}`)))
    .catch(console.log);
