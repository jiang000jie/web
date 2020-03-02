/*2020年2月28日
https://juejin.im/entry/5adbd18ef265da0ba76f50ec
https://juejin.im/post/5b61d8e3e51d45191d7a28a8
nodejs的依赖库，包括大名鼎鼎的V8、libuv。
事件循环
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Timer--> Pending I/O --> idle,prepare --> poll --> check --> close --> Timer

Timer: setTimeout,setInterval

Pending I/O: fs.raed,socket等IO操作的回调函数

idle,prepare:内部使用

poll:等待异步请求和数据

check:只处理setImmediate

微任务：
Promise,process.nextTick
*/
let events = require('events');
let fs = require('fs');
// let Emitter=new events.EventEmitter();
// // 绑定事件及事件的处理程序
// eventEmitter.on('eventName', eventHandler);

// // 触发事件
// eventEmitter.emit('eventName');
console.log('start');
setImmediate(() => {
    console.log('setImmediate1');
    setTimeout(() => {
        console.log('setTimeout1')
    }, 0);
});
Promise.resolve().then(res=>{
    console.log('then');
})
setTimeout(() => {
    process.nextTick(() => {
        console.log('nextTick');
    });
    console.log('setTimeout2');
    setImmediate(() => {
        console.log('setImmediate2');
    });
}, 0);
console.log('end');
//then setTimeout2  nextTick  setImmediate1 setImmediate2 setTimeout1