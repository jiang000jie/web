let http = require('http')
let fs = require('fs');

let server=http.createServer((req,res)=>{
    res.end(fs.readFileSync('./index.html'))
})

server.listen(8000,()=>{
    console.log(`The Web server is run at ${server.address().port}`);
})