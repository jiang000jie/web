/*
   2020年2月27日
   1.单例模式(创建型)
      全局只实例化一次，只对外暴露一个获取的接口

*/


class SingleObject {
 
   //创建 SingleObject 的一个对象
   private static instance:SingleObject = new SingleObject();
 
   //让构造函数为 private，这样该类就不会被实例化
   private SingleObject(){}
 
   //获取唯一可用的对象
   public static  getInstance():SingleObject{
      return this.instance;
   }
 
   public  showMessage():void{
      console.log("Hello World!");
   }
}