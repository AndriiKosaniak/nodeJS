const fs = require('fs');
const path = require('path');

const dirPath18 = path.join(process.cwd(), 'students', '1800');
const dirPath20 = path.join(process.cwd(), 'students', '2000');

function swapStudent(oldPath, newPath){
    fs.readdir((oldPath), ((err, files) => {
        if(err){
         console.log(err)
        }
        else {
            files.forEach(file => {
                fs.rename(path.join(oldPath, file), path.join(newPath, file), err1 => console.log(err1));
            })
            }
    }));
}

swapStudent(dirPath18, dirPath20);
swapStudent(dirPath20, dirPath18);
