let express = require("express");       // load the module 
let app = express();                    // reference of express js module 
let bodyParser = require("body-parser"); // load the module

let myMiddlewareFun = (req,res,next) => {
    console.log("I am myMiddlewareFun");        // we can do some logic here
    
    next();     // pass the control to next middleware
};

// middleware 
app.use(bodyParser.urlencoded({extended:true})); // enable post data from request 

//app.use(myMiddlewareFun);   // register the middleware ie custom middleware 



// // http://localhost:8080/

// app.get("/", (req, res) => {
//     res.send("Welcome to Express JS Application");
// });

// // http://localhost:8080/about_us
// app.get("/about_us", (req, res) => {
//     res.send("Welcome to About Us Page");
// });

// // http://localhost:8080/contact_us
// app.get("/contact_us", (req, res) => {
//     res.send("Welcome to Contact Us Page");
// });

// opening html pages base upon path
app.get("/",(req,res)=> {
    //res.sendFile("index.html");
    //res.sendFile("D:\\Desktop\\JavaScript Using Generative AI\\generativeaiusing_js_march_2025_batch\\Programs\\Node JS Programs\\Simple Express JS Login App\\index.html");
   // res.send(__dirname)     // it provide current directory path
   res.sendFile(__dirname + "/index.html");
})

app.get("/about_us",(req, res)=> {
    res.sendFile(__dirname + "/about_us.html");
})

app.get("/contact_us",(req, res)=> {
    res.sendFile(__dirname + "/contact_us.html");
});

app.get("/login",(req, res)=> {
    res.sendFile(__dirname + "/login.html");
});

app.get("/SignIn",(req, res)=> {            // data send through URL using query param technique 
    let username  = req.query.username;
    let password = req.query.password;
    
    if(username == "admin" && password == "admin") {
        res.send("Login Success");
    }else {
        res.send("Login Fail");
    }
});

app.post("/SignIn",myMiddlewareFun,(req, res)=> {
    let login = req.body;   // get the data from the form
    console.log(login);    // display data on console 
    if(login.username == "admin" && login.password == "admin") {
        //res.send("Login Success");
        res.sendFile
    }else {
        res.send("Login Fail");
    }
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});


