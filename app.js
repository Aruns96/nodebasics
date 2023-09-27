const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");


const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use("/add-product",(req,res,next)=>{
  
  res.send('<form action="/product" method = "POST"><input type ="text" name="title"><input type ="text" name="size"><button type="submit">ADD</button></form>');
  
 });
app.use("/",(req,res,next)=>{
  
 res.send("<h1>Hello world!</h1>");
 
});
app.post("/product",(req,res,next)=>{

  console.log(req.body);
  
  res.redirect("/");
  
  
 });




const server = http.createServer(app);


server.listen(4000);