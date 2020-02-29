let util = rquire('loader-utils')
module.export=function(content){
    const options=util.getOptions(this);
    return content&&content.replace(content,options.name)
}