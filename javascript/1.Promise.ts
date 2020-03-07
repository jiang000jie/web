// 2020.03.06
/*

Promise

常用API:resolve,reject,then,catch,all,race

*/


function promise(excute){
        let self = this;
        let STATUE={
            PENDING:0,
            FULLIED:1,
            FAILURE:-1
        }
        self.Status=STATUE.PENDING;
        self.Result='';
        self.info_success=undefined;
        self.info_failure=undefined;

        function resolve(args){
            self.Status=STATUE.FULLIED;
            self.info_success=args;
        }
        function reject(args){
            self.Status=STATUE.FAILURE;
            self.info_failure=args;
            
        }
        excute(resolve,reject);
        
    }
    promise.prototype.then=function(sucess,failure){
        let self = this;
        self.Status==1?sucess(self.info_success):failure(self.info_failure);
    }
    
    let i= new promise((resolve,reject)=>{
        let timer=setTimeout(()=>{
            resolve('resolve');
        },1000)
        console.log(`timer is ${timer}`)
    });
    console.log(i.then(res=>{
        console.log(res);
    },err=>{
        console.log(err);
    }));