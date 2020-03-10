/*
    2020.03.08
    外观模式,隐藏系统的复杂性，向客户端暴露一个简单可用的接口

*/

interface IShape{
    draw():void;
}

class Circle implements IShape{
    draw():void{

    }
}

//外观类
class ShapeMaker {
    private circle:Circle;
    constructor(){
        this.circle = new Circle();
    }
    drawCircle():void{
        this.circle.draw();
    }
}