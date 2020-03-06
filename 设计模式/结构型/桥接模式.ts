// 桥接（Bridge）是用于把抽象化与实现化解耦，使得二者可以独立变化。

// 定义两个接口，分别表示不同的类型

interface Color{
    fill(shape:Shape):void;
}
interface Shape{
    color:Color;
    SetColor( color:Color):void;
    draw():void;
}

//定义基于接口的具体类
class White implements Color{
    fill():void{

    }
}
class Circle implements Shape{
    color:Color;
    SetColor(color:Color):void{

    }
    draw():void{

    }
}

let cicle = new Circle();
let white = new White();
white.fill();
cicle.SetColor(white);