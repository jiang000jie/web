# Vue

> v-on的参数问题

```
<div id="app">
    <div @click="add">{{count}}</div>
</div>
<script>
const app=new Vue({
    el:'#app',
    data:{
        count:0
    },
    methods(){
        add()
    }
})
</script>
```
其中，若@click="add"中add不加小括号，但是add有形参，则默认把第一个形参作为event作为参数传入，亦可用$event传入事件对象

> v-on的修饰符

```
<div id="app">
    <div @click.stop="add">{{count}}</div>
</div>
```
其中，若@click.stop="add"中stop为v-on为修饰符,根据官方文档有如下修饰符：
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.capture - 添加事件侦听器时使用 capture 模式。
.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
.native - 监听组件根元素的原生事件。
.once - 只触发一次回调。
.left - (2.2.0) 只当点击鼠标左键时触发。
.right - (2.2.0) 只当点击鼠标右键时触发。
.middle - (2.2.0) 只当点击鼠标中键时触发。
.passive - (2.3.0) 以 { passive: true } 模式添加侦听器

