let http = require("http");

// http://localhost:8080/
let server = http.createServer((req,res)=>{
    res.write("Welcome to Http Module");
    res.end();
});

server.listen(8080,()=>{
    console.log("Server running on port number 8080");
});