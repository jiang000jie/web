// 2020年2月28日


//接口的定义及其使用
interface Lable{
    readonly label:string;//只读属性，只在初始化时可以赋值
    label1?:string;
    [propName:string]:any;//索引签名,表示该接口可以有任意数量的属性
}
function printLabel(labelObj:Lable){
    console.log(labelObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//函数类型的接口

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
//可索引类型的接口,索引签名支持字符串和数字
interface Index{
    [propName:string]:any;//索引签名,表示该接口可以有任意数量的属性
    [propName1:number]:any;//索引签名,表示该接口可以有任意数量的属性
}