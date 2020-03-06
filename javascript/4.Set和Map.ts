// 类似数组，但是成员的值都是唯一的
// Set和WeakSet

let i = new Set([1,1,2,3,3,4,5,5])

i.add(1);
i.size;
i.add(12);
i.delete(1);
i.has(5);
i.clear();

//遍历操作

i.keys();
i.values();
i.entries();
i.forEach(item=>{
    console.log(item);
})

/*
    WeakSet
    如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。
*/
let j = new WeakSet([{"a":1},{}])

j.add({});
j.delete({});
j.has({});
//没有size,无法遍历









// 键值对的集合
// Map和WeakMap

let m = new Map();
m.set("name",12);
m.get("name")
m.size;

m.set("age",3);
m.get("age");
m.delete("age");
m.has("age");
m.clear();

i.keys();
i.values();
i.entries();
i.forEach(item=>{
    console.log(item);
})


//WeakMap与Map的区别是WeakMap只能接受对象为键，对键名是弱引用；