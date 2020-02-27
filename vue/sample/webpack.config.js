const path = require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    mode:'development',
    entry:'./src/main.js',
    output:{
        filename:'[name].[hash:8].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.(png|jpg)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:2048,
                            name:'[hash:5].[ext]'
                        }
                    }
                ]
            },
            {
                test:'/\.vue$/',
                use:'vue-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}