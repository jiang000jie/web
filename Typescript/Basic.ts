//布尔：
let isBool:Boolean=false;

//数值
let num:number=0xf00d;

//字符串
let str:string='hello';

//数组_1
let arr1:number[]=[1,1,3,4];

//数组_2
let arr2:Array<string>=['1','2','he'];

//只读的数组
let arr3:ReadonlyArray<number>=[1,2,3,4,8,6];

//元组
let tuple:[number,string]=[1,'3']

//枚举
enum Color{Red,Green=3,Blue}

//任意值
let notSure:any=1;
notSure='123';

//void,该类型的值只有null或者undefined
let unusable:void=null;//或者undefined;

//never,永不存在的值的类型，可用作抛出异常
function error(message: string): never {
    throw new Error(message);
}

//类型断言，表示比Typescript更了解值的信息
let someValue: any = "this is a string";
//语法1
let strLength: number = (<string>someValue).length;

//语法2
//let strLength: number = (someValue as string).length;