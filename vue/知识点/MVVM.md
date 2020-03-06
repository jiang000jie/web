
## MVVM

    指的是Model-View-ViewModel,即模型-视图-视图模型，「模型」指的是后端传递的数据，「视图」指的是所看到的页面，「视图模型」是MVVM的核心，它是连接View与Model的桥梁，实现view的变化会自动更新到viewModel中，viewModel中的变化也会自动显示在view上，是一种数据驱动视图的模型


### View

    <div>
        <nav></nav>
        <header>{{name}}</header>
        <footer></footer>
    </div>

### ViewModel

    new Vue({
        data:{
            name:'hello'
        }
        ,created(){
            http.get('data.json').then(data=>{
                this.name=data.name
            })
        }
    })

### Model
    data.json
    {
        name:'John',
        age:12
    }