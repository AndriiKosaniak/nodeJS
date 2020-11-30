const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs-extra');
const path = require('path');

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
let thisUser = {};
const pathToFile = path.join(process.cwd(), 'db', 'database.json');

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
    if(!isLogged){
        return res.redirect('/error');
    }

    fs.readFile(pathToFile, ((err, data) => {
        if(err){
            console.log(err);
        }
        const users = JSON.parse(data);
        return res.render('account', {thisUser, users, isLogged});
    }));
});

app.get('/logout', ((req, res) => {
    isLogged = false;
    res.redirect('/');
}));

app.post('/signup',  (req, res) => {
    const {username, password, email} = req.body;

    fs.readFile(pathToFile, ((err, data) => {
        if(err){
            console.log(err)
        }

        const users = JSON.parse(data);
        const resStatus = users.find(user => user.email === email);

        if(!resStatus) {
            thisUser = {username, password, email};

            users.push(thisUser);

            fs.writeFileSync(pathToFile, JSON.stringify(users), err => {
                if (err) {
                    console.log(err);
                }
            });

            isLogged = true;
            return res.redirect('/account');
        }

        if(resStatus){
        return res.json('This email is already taken.');
            }
    }));
});

app.post('/login', ((req, res) => {
    fs.readFile(pathToFile, ((err, data) => {
        if (err) {
            console.log(err);
        }

        const {username, password} = req.body;
        const users = JSON.parse(data);

        users.forEach(user => {
            if (user.username === username && user.password === password) {
                isLogged = true;
                thisUser = user;
            }
        });
        if(isLogged){
            res.redirect('/account');
        }
        if(!isLogged){
            res.redirect('/error');
        }
    }));

}));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
