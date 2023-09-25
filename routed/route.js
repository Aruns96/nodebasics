const fs = require("fs");
     const requestHandler = (req,res) => {
        const url = req.url;
        const method = req.method;
        if(url === "/"){
               res.setHeader("Content-Type","text/html")
               res.write("<html>");
               res.write("<head><title>message</title></head>");
               res.write('<body><form action="/message" method = "POST"><input type ="text" name="message"><button>Send</button></form></body>');
               res.write("</html>");
               return res.end();
        }
        if(url === "/message" && method==="POST"){
           const body = [];
           req.on("data",(chunk)=>{
               console.log(chunk)
               body.push(chunk);
           });
           return req.on("end",()=>{
               const parsed = Buffer.concat(body).toString();
               console.log(parsed);
               const message = parsed.split("=")[1]
               fs.writeFile("message.txt",message,(err)=>{
                   if(err){
                       console.log(err)
                   }
                   res.statusCode = 302;
                   res.setHeader("Location","/");
                   return res.end();
               });
               
           });
           
          
        }
     }

module.exports = requestHandler;




     
     