# webpack

* 作用
* 安装
* 常用的插件


> 作用

* 代码转化。将浏览器不识别的代码转化为可识别代码。
* 文件优化。文件体积压缩等。
* 代码分割。
* 模块合并。
* 自动刷新。
* 代码校验。
* 自动发布。

> 基本配置

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
        filename:'[id]-[name]-[hash:8]-[chunkhas:8]-[query].js',
        path:path.resolve(__dirname,"dist")
    },
    module:{...},
    plugins:[...]
}

```

> 常用的插件

### webpack-dev-server(适用于development)

创建


### html-webpack-plugin

用于index.html的自动生成，可将hash值的js文件自动写入html文件

```
let HtmlWebpackPlugin=require('html-webpack-plugin')

new HtmlWebpackPlugin({        
    template:'',
    filename:'index.html'
})
```
