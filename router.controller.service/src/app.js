const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs-extra');
const path = require('path');

const {apiRouter} = require("./routers");

const port = 5000;
const app = express();

app.use(express.static(path.join(process.cwd(), 'views')));
app.use(express.static(path.join(process.cwd(), 'dataBase')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', '.hbs');
app.engine('.hbs', hbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.use('/', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
