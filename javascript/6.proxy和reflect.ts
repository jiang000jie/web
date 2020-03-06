/* 
2020.03.04
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

 Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

 new Proxy(obj,handle)

 1. 当handle为{}时,没有任何拦截，直接访问即可
 */

 let p = new Proxy({},{
     get(target,key,receiver){
        return Reflect.get(target,key,receiver)
     },
     set(target,key,value,receiver){
        return Reflect.set(target,key,value,receiver)
     }
 })

//  proxy的拦截方法
interface proxy{
    get(target,key,receiver):any;

    set(target,key,value,receiver):boolean;
    
    has(target,key):boolean;//拦截key in proxy的操作

    deleteProperty(target,key):boolean;//拦截delete proxy[key]的操作


}


/*

（1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。

（2） 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。

reflect 简单说就是将部分的Object的方法转移至Reflect
*/

/*
    Reflect.apply(target,thisArg,args)
    Reflect.construct(target,args)
    Reflect.get(target,name,receiver)
    Reflect.set(target,name,value,receiver)
    Reflect.defineProperty(target,name,desc)
    Reflect.deleteProperty(target,name)
    Reflect.has(target,name)
    Reflect.ownKeys(target)
    Reflect.isExtensible(target)
    Reflect.preventExtensions(target)
    Reflect.getOwnPropertyDescriptor(target, name)
    Reflect.getPrototypeOf(target)
    Reflect.setPrototypeOf(target, prototype)
*/
