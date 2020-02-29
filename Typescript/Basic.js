//布尔：
var isBool = false;
//数值
var num = 0xf00d;
//字符串
var str = 'hello';
//数组_1
var arr1 = [1, 1, 3, 4];
//数组_2
var arr2 = ['1', '2', 'he'];
//元组
var tuple = [1, '3'];
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
//任意值
var notSure = 1;
notSure = '123';
//void,该类型的值只有null或者undefined
var unusable = null; //或者undefined;
//never,永不存在的值的类型，可用作抛出异常
function error(message) {
    throw new Error(message);
}
