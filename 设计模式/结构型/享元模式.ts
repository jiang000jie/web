/*

    2020.03.10
    享元模式,又称对象共享
    重复利用已创建的对象,修改原有对象的属性,不再创建新的对象，防止对象过多，造成内存泄漏

*/

interface IShape{
    draw():void;
}

class Circle implements IShape{
    private Color:string;
    private X:number;
    private Y:number;
    private Radius:number;
    constructor(color:string){
        this.Color = color;
    }
    public draw():void{

    }
    public setX(newX:number):void{
        this.X=newX;
    }
    public setY(newY:number):void{
        this.Y = newY;
    }
    public setRadius(newRadius:number):void{
        this.Radius = newRadius;
    }
}

//创建第一个实例
let C1 = new Circle('Red');

// 重复利用第一个实例,仅改变位置
console.log(C1);
C1.setRadius(1);
C1.setX(2);
C1.setY(3);
let C2 = C1;
console.log(C2);
console.log(C2===C1);