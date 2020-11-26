const fs = require('fs-extra');
const path = require('path');
const {promisify} = require('util');

const readLS = promisify(fs.readdir);
const writeMV = promisify(fs.rename);

const readFileLS = promisify(fs.readFile);

const users = [
    {
        name: 'Oleh',
        age: 21,
        gender: 'male'
    },
    {
        name: 'Nataly',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Andrii',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Olga',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Maxym',
        age: 23,
        gender: "male"
    }
    ,
    {
        name: 'Roman',
        age: 17,
        gender: "male"
    }
    ,
    {
        name: 'Yulia',
        age: 30,
        gender: "female"
    }
];

function groupUsers() {
    users.forEach(user => {
        const strUser = JSON.stringify(user);

        if (user.gender === 'male' && user.age < 18) {
            const ourPath = path.join(process.cwd(), 'users', 'boys', `${user.name}.txt`);

            fs.writeFile(path.join(ourPath), strUser, err => err && console.log(err))
        } else if (user.gender === 'male' && user.age >= 18) {
            const ourPath = path.join(process.cwd(), 'users', 'men', `${user.name}.txt`);

            fs.writeFile(path.join(ourPath), strUser, err => err && console.log(err))
        } else if (user.gender === 'female' && user.age < 18) {
            const ourPath = path.join(process.cwd(), 'users', 'girls', `${user.name}.txt`);

            fs.writeFile(path.join(ourPath), strUser, err => err && console.log(err))
        } else if (user.gender === 'female' && user.age >= 18) {
            const ourPath = path.join(process.cwd(), 'users', 'women', `${user.name}.txt`);

            fs.writeFile(path.join(ourPath), strUser, err => err && console.log(err))
        } else {
            console.log('ERROR')
        }
    });
}

groupUsers();


async function readUsers() {
    const foundUsers = [];
    const defaultPath = path.join(process.cwd(), 'users');

    const folders = await readLS(defaultPath);
    for await(let folder of folders) {
        const filePath = path.join(defaultPath, `${folder}`);

        const files = await readLS(filePath);

        for await(let file of files) {
            const fileInfo = await readFileLS(path.join(filePath, `${file}`));
            const jsonFile = JSON.parse(fileInfo.toString());
            foundUsers.push(jsonFile)
        }
    }

    return foundUsers;
}

readUsers().then(res => {
    console.log(res);
});
