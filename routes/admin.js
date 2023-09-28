const express = require("express");
const path = require("path");
const rootDir = require("../util/path")
const contactControllers = require("../controllers/contact")

const route = express.Router();



  route.get("/add-product",(req,res,next)=>{
  
    res.sendFile(path.join(rootDir,"views","admin.html"));
    
   });

   route.post("/add-product",(req,res,next)=>{

    console.log(req.body);
    
    res.redirect("/");
    
    
   });
   route.get("/contact-us",contactControllers.getContact);
   route.post("/success",contactControllers.postContact);

   module.exports = route;
