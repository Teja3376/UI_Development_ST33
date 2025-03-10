// NodeJS Programming
// File System Module 
const myfs= require("fs");

myfs.writeFileSync("myData.txt","My NodeJS Data RAM");

// Replace the Data
  myfs.writeFileSync("myData.txt","Welcome to MyNodeJS Data");