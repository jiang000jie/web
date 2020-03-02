class Pattern_Prototype{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    clone(obj:Pattern_Prototype){
        return new Pattern_Prototype(obj.name,obj.age);
    }
}

let a = new Pattern_Prototype('a',1);

let b = a.clone(a);


console.log(a===b);
/*
    2020.03.02
    原型模式，又称克隆模式，将对象复制一份，但是与源对象无关；

    注意:该模式仅适用浅拷贝，即只能拷贝基本数据类型；

*/