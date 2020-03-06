let util = rquire('loader-utils')
module.exports=function(content){
    const options=util.getOptions(this);
    return content&&content.replace(content,options.name)
}