const express = require('express');
const path = require('path');

const {usersRouter, registrationRouter} = require("./routers");
const {sequelize} = require('./dataBase');

const port = 5000;
const app = express();

app.use(express.static(path.join(process.cwd(), 'dataBase')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRouter);
app.use('/register', registrationRouter);

sequelize.sync({alter: true}) // todo
  .then(() => app.listen(port, err => err && console.log(err) || console.log(`Listen localhost:/${port}`)))
  .catch(console.log);
