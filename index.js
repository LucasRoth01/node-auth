const express = require("express");
const cookieParser = require("cookie-parser");
const auth = require("./modules/auth");
const login = require("./modules/login");
const loginForm = require("./modules/login-form");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.get("/",function(req,res){
    res.send("my login script");
});

app.get("/secret",auth,function(req,res){
    res.send("hej");
});




app.get("/login",loginForm);

app.post("/login",login);


const port = process.env.PORT || 3700
app.listen(port, function(){console.log("port:" +port)});