//Import fs module
const path = require('path');
const fs = require('fs')

//create directory/folder named "Students"
fs.mkdir('New', (err) => {
    if (err) throw err;
    console.log('Saved!');
  });

//In the Students directory, create a file named user.js
fs.writeFile('Students/user.js', '', (err) => {
    if (err) throw err;
    console.log('successful');
});

//Update the Students directory to “Names”
fs.rename('Students' , 'Names' , (err) => {
    if (err) throw err;
    console.log('done!');
});

//Add your name as content to the file user.js
fs.appendFile('Names/user.js', 'Ololade', (err) => {
    if (err) throw err;
});

//Update the file and add your age, sex, nationality, phone number and any other information about yourself
const userInfo = {
    age: 323,
    sex: 'Female',
    nationality: 'Nigeria',
    phone: '123456',
};
fs.appendFile('Names/user.js', JSON.stringify(userInfo), (err) => {
    if (err) throw err;
});

//Update the file user.js to {your_name}.js eg daniel_adesoji.js
fs.rename('Names/user.js' , 'Names/Ololade_Abiodun.js' , (err) => {
    if (err) throw err;
});

//Read the contents from {your_name}.js. User fs.open or fs.readFile
fs.readFile('Names/Ololade_Abiodun.js', 'utf8', (err, data) => {
    if (err) throw err;

    console.log('Ololade_Abiodun.js:');
    console.log(data);
});

//Delete the file {your_name}.js
fs.unlink('Names/Ololade_Abiodun.js', (err) => {
    if (err) throw err;
});

//Delete the directory “Names”
fs.rmdir('Names', (err) => {
    if (err) throw err;

    console.log('Directory "Names" has been deleted.');
});
