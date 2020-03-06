/*
    2020.03.03
    流,Stream
    四种类型:
        Readable,Writable,Deplex,Transform
    处理事件:
        data,end,error,finish
*/




let fs = require('fs');

let readerStream = fs.createReadStream("aasd");

readerStream.setEncoding("UTF8");

readerStream.on('data',data=>{
    console(data);
})
readerStream.on('end',data=>{
    console(data);
})

pipe