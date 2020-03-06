/*
    2020.03.02
    Buffer,处理二进制流

*/
//创建bufferr

//定义长度为3的缓存
let b0 = Buffer.alloc(3);

let b1 = Buffer.from([1,2,3,4])

let b2 = Buffer.from("hello World","UTF-8")

//写入缓存，buf.write(string[, offset[, length]][, encoding])
b0.write('a')

//读取缓存，buf.toString([encoding[, start[, end]]])
b0.toString()
console.log(b1)