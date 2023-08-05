//import the modules
const path = require('path');
const os = require('os');

//print current directory
const workingDirectory = process.cwd();
console.log(workingDirectory);

//print out the separator of a given file path
const filePath = '/Users/ololade/Node.txt';
const pathSeparator = path.sep;
console.log(pathSeparator);

//Print out the extension name of a file path
const fileExtension = path.extname(filePath);
console.log(fileExtension);

//Print out the process id of the current running process
const processId = process.pid;
console.log(processId);

//Print out the user information of the os
const userInfo = os.userInfo
console.log(userInfo);

//Print out the platform of an operating system
const osPlatform = os.platform
console.log(osPlatform);