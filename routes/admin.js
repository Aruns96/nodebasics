const express = require("express");
const path = require("path");
const rootDir = require("../util/path")

const route = express.Router();



  route.get("/add-product",(req,res,next)=>{
  
    res.sendFile(path.join(rootDir,"views","admin.html"));
    
   });

   route.post("/add-product",(req,res,next)=>{

    console.log(req.body);
    
    res.redirect("/");
    
    
   });
   route.get("/contact-us",(req,res,next)=>{
  
    res.sendFile(path.join(rootDir,"views","contact.html"));
    
   });
   route.post("/success",(req,res,next)=>{

    res.send("<h1>File Filled Succesfully!</h1>")
    
    
   });

   module.exports = route;
