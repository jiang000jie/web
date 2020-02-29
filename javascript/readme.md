# Javascript
* <a href="数据类型">基本数据类型</a>
* this的指向
* 闭包
* 立即执行函数
* 箭头函数
* 事件循环(Event Loop)
* 原型与原型链
* 作用域链
* Promise
* 模块的导入导出


> ## <a href="数据类型">数据类型</a>
值类型(基本类型)：Boolean、Number、String、null、undefined、Symbol.

引用类型：Object、Array、Function

> ## 闭包
闭包，即能访问函数外部作用域的函数。


优点：能隔离作用域。  
缺点：因需访问函数内部作用域，故在内存中会一直保持对该作用域的引用，可能会导致内存泄露
<pre>
function out(){
    var num=10;
    function in(){
        console.log(num)    //10
    }
    return in;
}
var t=out()
t() //10
</pre>

> ## 事件循环
因Javascript为单线程运行，为防止程序阻塞，可利用浏览器的多线程进行“并行”处理。
在浏览器中，分为同步队列与异步队列。
同步队列，即从上至下的执行代码。
异步队列，同时分为宏任务和微任务。
当代码执行时，一定先执行同步队列中的任务，遇到异步任务，则丢到相应的异步队列中，等待同步任务完成后，先从微任务中获取任务压入调用栈(call stack),直到所有的微任务完成后才去获取宏任务的中代码，直到宏任务全部完成。
若在宏任务中遇到微任务，则先把微任务压入微任务栈中，再继续执行未完成的宏任务，再去查询微任务栈是否还有任务。
以下为示例代码。输出的数字即为执行顺序
<pre>
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
</pre>

> ## 立即执行函数
