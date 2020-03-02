/*

    Symbol,ES6引入的一种基本数据类型，标识独一无二的值，其他的基本类型:Boolean,Number,String,Object,null,Undifined,Object
    不能进行计算，会报错。
    
    
*/
{
    let a = Symbol('this is a ac')


    // 可以显示转化为字符串。
    String(a); //   a.toString()
    

    // 可以转为布尔值，结果为true,但是不能转为数字
    Boolean(a); //true
}


{
    let a = {};
    let symbol = Symbol('MySymbol')
    a.symbol='hello';
    //a.symbol中的symbol为字符串

}