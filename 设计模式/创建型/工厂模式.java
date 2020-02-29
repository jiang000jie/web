//2020年2月28日
//1.工厂模式，实现一个接口


public interface Shape{
    void draw();
}
public class Rectangle implements Shape{
    @Override
    public void draw(){
        System.out.println("Inside Rectangle::draw() method.");
    }
}
public class Square  implements Shape{
    @Override
    public void draw(){
        System.out.println("Inside Square::draw() method.");
    }
}
public class ShapeFactory {
    public Shape getShape(String shapeType){
        if(shapeType == null){
            return null;
         }
         if(shapeType == 'Rectangle') return new Rectangle();
         if(shapeType == 'Square') return new Square();
         return null;
    }
 }