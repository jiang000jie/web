let path=require('path')

module.exports={
    mode:'development',
    entry:'./src/index.js',
    devServer:{
        port:8090,
        // progress:true,
        contentBase:'./dist'
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'diist')
    }
}