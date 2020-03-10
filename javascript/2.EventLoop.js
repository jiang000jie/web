/* 2020年2月28日
-------事件循环-------
 因Javascript为单线程运行，为防止程序阻塞，可利用浏览器的多线程进行“并行”处理。
 在浏览器中，分为同步队列与异步队列。
 同步队列，即从上至下的执行代码。
 异步队列，同时分为宏任务和微任务。
 当代码执行时，一定先执行同步队列中的任务，遇到异步任务，则丢到相应的异步队列中，等待同步任务完成后，先从微任务中获取任务压入调用栈(call stack),直到所有的微任务完成后才去获取宏任务的中代码，直到宏任务全部完成。
 若在宏任务中遇到微任务，则先把微任务压入微任务栈中，再继续执行未完成的宏任务，再去查询微任务栈是否还有任务。
 以下为示例代码。输出的数字即为执行顺序
*/

/* 
宏任务
    script整体代码
    浏览器事件:如鼠标事件,键盘事件
    定时事件:setTimeout,setInterval,setLmmediate
    I/O事件:资源读取
    UI渲染
微任务
    Promise
    process.nextTick
    Async/Await(实际就是promise)
    MutationObserver(html5新特性)
*/
console.log(1);
setTimeout(function(){
    console.log(5);
    new Promise(function(resolve){
        console.log(6)
        resolve()
    }).then(function(){
        console.log(8)
    })
    console.log(7);
},0)
new Promise(function(resolve){
    console.log(2)
    setTimeout(function(){
        console.log(9)
    },0)
    resolve()
}).then(function(){
    console.log(4)
})
console.log(3);