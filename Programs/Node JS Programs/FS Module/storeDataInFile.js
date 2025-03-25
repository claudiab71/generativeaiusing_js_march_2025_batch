let fs = require("fs");     // load the module fs
let message = "Welcome to Node JS Application";
// writeFileSync() method is used to write data in file in synchronous way

// fs.writeFileSync("demo.txt", message); // write the data in file demo.txt
// console.log("1st Message");
// console.log("2nd Message");
// console.log("3rd Message");

// writeFile() method is used to write data in file in asynchronous way
fs.writeFile("demo1.txt",message, (err) => {
    if(err){
        console.log("Error generated");
    }else{
        console.log("Data written successfully");
    }
});
console.log("1st Message");
console.log("2nd Message");
console.log("3rd Message");
