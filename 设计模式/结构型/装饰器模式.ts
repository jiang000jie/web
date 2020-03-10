/**
 
    2020.03.08
    装饰器模式,在不改变类的基础上，为类添加额外的方法
    
 */
interface Shape{
    draw():void;
}
//普通类
class Circle implements Shape{
    draw():void{
        console.log("Shape:Circle");
    }
}


//装饰抽象类
abstract class ShapeDecorator implements Shape{
    protected shape:Shape;

    constructor(shape:Shape){
        this.shape = shape;
    }

    draw():void{
        this.shape.draw();
    }
}

//装饰具名类

class RedShapeDecorator extends ShapeDecorator{
    constructor(shape:Shape){
        super(shape);
    }
    draw():void{
        this.shape.draw();
        this.setRed(this.shape);
    }
    private setRed(shape:Shape):void{
        console.log("Color:Red");
    }
}