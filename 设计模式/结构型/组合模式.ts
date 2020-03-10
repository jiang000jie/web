/* 

    2020.03.06
    组合模式，生成树状结构的数据,通过在类中定义本身类的数组,向该数组添加数据

*/
class Dept{
    ID:number;
    Name:string;
    Order:number;
    subDept:Array<Dept>;
    constructor(id:number,name:string,order:number){
        [this.ID,this.Name,this.Order,this.subDept] = [id,name,order,[]];
    }
    add(dept:Dept):void{
        this.subDept.push(dept);
    }
    remove(id:number):void{
        this.subDept=this.subDept.filter(i=>i.ID!=id);
    }
    getSubDept():Array<Dept>{
        return this.subDept;
    }
}
var a = new Dept(1, 'jj', 2);
console.log(a);