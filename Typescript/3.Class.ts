// 2020.03.02

//类的创建
class Person{
    name:string;
    static origin={x:0,y:0};
    contructor(name:string){
        this.name=name;
    }
    getName():string{
        return this.name;
    }
}

//类的继承

class Student extends Person{
    contructor(name:string){
        super();
    }
}

/*

    类，类成员，类方法的修饰符，public(默认值),protected,private
    其中类成员有个readonly修饰符，表示只读

*/

//类属性的存取器

class People{
    private FirstName:string;
    private LastName:string;
    get fullName(){
        return this.FirstName + ' ' + this.LastName;
    }
    set fullName(firstName:string){
        this.FirstName=firstName;
    }
}