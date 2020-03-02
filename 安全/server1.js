let http = require('http')
let fs = require('fs');
let url = require("url")
let querystring = require("querystring")

let server=http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:8000");
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT");
    res.end('Hell World\n');    
})

server.listen(8001,()=>{
    console.log(`The Web server is run at ${server.address().port}`);
    
})