/*

    2020.03.03
    function

*/

//定义
function add(a:number,b:number):number{
    return a+b;
}

// 完整的函数类型

let Add:(a:number,b:number)=>number = function(x:number,y:number):number{
    return x+y;
}

/**
 * 可选参数，默认参数，剩余参数
 * 
 * 可选参数在属性名后加？即可，但是要放在最后面
 * 默认参数不需要放在参数后面，若使用默认值，可传入undefined
 */

 function sum(a:string,b?:string):string{
     return a+b;
 }
 function sum1(...args:any[]):any[]{
    return args;
}