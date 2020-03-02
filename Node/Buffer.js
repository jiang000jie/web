/*

    Buffer,处理二进制流

*/
//创建bufferr

//定义长度为3的缓存
let b0 = Buffer.alloc(3);

let b1 = Buffer.from([1,2,3,4])

let b2 = Buffer.from("hello World","UTF-8")


console.log(b1)