const express = require('express');

const {usersRouter, registrationRouter} = require("./routers");

const port = 5000;
const app = express();

const db = require('./dataBase').getInstance();
db.initializeModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRouter);
app.use('/register', registrationRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
