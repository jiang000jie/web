/*
    2020.03.05
    过滤器模式
    对请求或者响应做一些预处理或者后处理

    分为三部分:单个过滤器,过滤器链,过滤器管理
  
 */

 //首先定义一个过滤器接口

 interface Filter{
     excute(Messgae:any):void;
 }

 //定义具体的过滤器,实现过滤器接口
 class AuthenticationFilter implements Filter{
     excute(Message:any):void{
        console.log("Authenticating Filter"+Message);
     }
 }
 class DebugFilter implements Filter{
    excute(Message:any):void{
       console.log("Debug Filter"+Message);
    }
}
//定义过滤器链,组合多个过滤器
class FilterChain{
    Filters:Array<Filter>;
    addFilter(filter:Filter):void{
        this.Filters.push(filter);
    }
    excute(Message:any):void{
        this.Filters.forEach(i=>i.excute(Message))
    }
}

//定义过滤管理器

class FilterManager{
    filterChain:FilterChain;
    Message:any;
    constructor(Message:any){
        this.Message = Message;
    }
    setFilter(filter:Filter):void{
        this.filterChain.addFilter(filter)
    }
    excute(){
        this.filterChain.excute(this.Message);
    }
}



//测试用例
{
    let Mgr = new FilterManager("request");
    Mgr.setFilter(new AuthenticationFilter());
    Mgr.setFilter(new DebugFilter());
    Mgr.excute();
}
