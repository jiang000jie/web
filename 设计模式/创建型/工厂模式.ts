/*
    2020年2月28日

    工厂模式，实现一个接口,由特定的类去实例化具体类，不由用户自行创建实例，进行统一管理类的实例化

*/

interface Shape{
     draw():void;
}
class Rectangle implements Shape{
    public  draw():void{
        console.log("Inside Rectangle::draw() method.");
    }
}
class Square  implements Shape{
    public  draw():void{
        console.log("Inside Square::draw() method.");
    }
}
class ShapeFactory {
    public  getShape( shapeType:string):Shape{
        if(shapeType == null){
            return null;
         }
         if(shapeType == 'Rectangle') return new Rectangle();
         if(shapeType == 'Square') return new Square();
         return null;
    }
 }