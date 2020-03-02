# webpack

* <a href="#1">作用</a>
* <a href="#2">安装</a>
* <a href="#3">基本配置</a>
* <a href="#4">常用的工具</a>
* <a href="#5">优化</a>


> <span id="1">作用</span>

* 代码转化。将浏览器不识别的代码转化为可识别代码。
* 文件优化。文件体积压缩等。
* 代码分割。
* 模块合并。
* 自动刷新。
* 代码校验。
* 自动发布。

> <span id="2">安装</span>

根据官方文档安装即可  https://www.webpackjs.com/guides/

> <span id="3">基本配置</span>

```
let path=require('path)
let HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    
    mode:'development',
    devtool:"source-map",
    target:"web",
    devServer:{...},
    entry:'./main.js',
    output:{
        filename:'[id]-[name]-[hash:8]-[chunkhash:8]-[query].js',
        path:path.resolve(__dirname,"dist")
    },
    library:'',
    libraryTarget:'',
    module:{...},
    plugins:[...],
    watch:true，
    watchOptions:{...},
    resolve:{

    }
}

```

* devtool:'source-map'
    源码映射，单独生成一个.map文件，确认源码的报错位置

* watch与watchOptions
    可以监听文件变化，当它们修改后会重新编译

* resolve
    resolve.modules  //只需在指定的路径中进行查找
    resolve.alias       //别名
    resolve.extensions  //遇到无扩展名的文件，则会按照extensions查询文件

* library
    打包文件的立即执行函数的返回值名称

* libraryTarget
    配置如何暴露 library

> <span id="4">常用的工具</span>

### webpack-dev-server(适用于development)

```
module.exports={
    ...
    devServer:{
        port:1234,              //端口
        progress:true,          //显示进度
        contentBase:'./dist',   //执行的目录
        compress:true,          //是否进行压缩
        proxy:{                 //请求代理

        }
    },
    ...
}
```

> ## plugins

### html-webpack-plugin

用于index.html的自动生成，可将hash值的js文件自动写入html文件

```
let HtmlWebpackPlugin=require('html-webpack-plugin')

new HtmlWebpackPlugin({        
    template:'',
    filename:'index.html',
    inject:'body'
})
```

### mini-css-extract-plugin(ExtractTextWebpackPlugin)

用于将css样式单独打包成一个文件

### clean-webpack-plugin

删除上一次打包文件

### copy-webpack-plugin

将其他资源拷贝到目前目录

### webpack.DefinePlugin

    设置环境变量

### webpack-merge

    配置合并

> ## loader

### style-loader/css-loader/less-loader/sass-loader/stylus-loader

用于处理css样式以及css预处理器

### postcss-loader(autoprefixer)

用于生产兼容各浏览器的css样式

### babel-loader

用于将高版本JS语言转换为浏览器可识别的JS

### file-loader 

用于将文件以一个文件的形式发布到输出目录下，并返回public url,以表示文件的绝对路径，防止因路径问题导致报错

### url-loader

用于将图片进行处理，如小于某值，则将图片转为base64码


> <span id="5">优化</span>

### 忽略第三方库的解析
```
module.exports={
    module:{
        noParse:'/juery/'  //不去解析query中的依赖库
    }
}
```

### 忽略第三方库的解析
```
module.exports={
    module:{
        rules:[{
            ...
            exclude:'/node_modules/'    //不匹配node_modules下的文件
            include:'/src/'             //只匹配node_modules下的文件
            ...
        }]  
    }
}
```

### 忽略某些文件
```
module.exports={
    plugins:[
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)       //从 bundle 中排除某些模块
    ]
}
```

### 动态链接库
```
module.exports={
    plugins:[
        new webpack.DllPlugin({

        })       
    ]
}
```

### 动态链接库
```
module.exports={
    plugins:[
        new webpack.DllPlugin({

        })       
    ]
}
```

### tree-shaking
通过import引入的模块，在生产环境中，会删除未被引用的代码，而通过require引入模块，则不能删除未引用的模块

### 抽取公共代码

module.exports={
    
    optimization:{
        splitChunks:{
            cacheGroups:{
                common:{
                    chunks:'initial',
                    minSize:0,
                    minChunks:1
                }
            }
        }
    }
}

### 懒加载
import().then(data=>{

})

### 热更新
只更新某一部分
```
module.exports={
    plugins:[
        new webpack.NamedModulesPlugin({
            //打印更新的模块路径
        }),
         new webpack.HotModuleReplacementPlugin({
             //热更新
        })    
    ]
}
```

### Tapable
webpack的实现原理