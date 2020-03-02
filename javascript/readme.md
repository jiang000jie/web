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


> ## 立即执行函数
