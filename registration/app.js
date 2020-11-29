const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs-extra');
const path = require('path');
const {promisify} = require('util');

const readLS = promisify(fs.readFile);

const port = 5000;
const app = express();

app.use(express.static(path.join(process.cwd(), 'views')));
app.use(express.static(path.join(process.cwd(), 'db')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', '.hbs');
app.engine('.hbs', hbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

let isLogged = false;

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.get('/account', (req, res) => {
    res.render('account');
});


app.post('/signup', async (req, res) => {
    const body = req.body;
    const pathToFile = path.join(process.cwd(), 'db', 'database.json');

    fs.readFile(pathToFile, ((err, data) => {
        if(err){
            console.log(err)
        }
        const users = JSON.parse(data.toString());
        const resStatus = users.find(user => user.email === body.email);

        if(!resStatus) {
            users.push(body);
            fs.writeFile(pathToFile, JSON.stringify(users), err => {
                if (err) {
                    console.log(err);
                }
            });

        }
        else {
            res.json('Email already exists');
        }
    }));

    res.json('OK');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



