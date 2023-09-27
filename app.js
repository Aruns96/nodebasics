const http = require("http");

const express = require("express");


const app = express();

app.use((req,res,next)=>{
  console.log("hello 1");
  next();
});

app.use((req,res,next)=>{
  console.log("hello 2");
 res.send("<h1>Hello world!</h1>");
 
});




const server = http.createServer(app);


server.listen(4000);