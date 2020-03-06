function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");

//定义泛型接口
let myIdentity: <T>(arg: T) => T = identity;