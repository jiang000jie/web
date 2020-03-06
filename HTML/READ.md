2020年2月27日

标签分类

行内元素：a,img,button,input

块级元素：p,h1~h5,div,ul,li,ol......

空元素:hr,br


2020年2月28日

HTML5新特性

语义化标签:即用正确的标签填充正确的内容,方便阅读理解，有利于SEO;

新标签: video,audio,article,nav,header,footer,canvas.dialog,

标签属性功能增加：

1.input,type可为date,email,number,range,search,week,month

本地存储：

storage，分为LocalStorage和SessionStorage

Web Worker:let i = new Worker('worker.js')

地理位置：navigator.geolocation

2020年3月2日
https://juejin.im/post/5ce4171ff265da1bd04eb4f3

1. DOCTYPE是什么？有什么用，怎么写？
    DOCTYPE，一种标准通用标记语言(SGML)的文档类型声明
    告知浏览器使用了哪个版本的HTML
    <!DOCTYPE html>
2. 严格(标准)模式与混杂(怪异)模式
严格(标准)模式，即浏览器按照W3C标准解析执行代码;
混杂(怪异)模式，浏览器以一种向后兼容的方式解析执行代码

3. HTML5不是SGML的子集



--------------------------------------------2020.03.03--------------------------------------------

title 属性和 alt 属性分别有什么作用？

当无法显示图片时，会显示alt中的内容;
当把鼠标悬停在图片时会显示title的内容;

--------------------------------------------2020.03.04--------------------------------------------
https://juejin.im/post/5ce4171ff265da1bd04eb4f3
meta 表示文档元信息的标签,如作者,日期,页面刷新,同时可用于SEO的搜索优化

属性:content(必须),http-equiv,name,scheme

1. "keywords" 是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。
<meat name="keyword" content="HTML,ASP,PHP">

2. http-equiv定义了响应头信息,如下就会在响应头添加charset:iso-8859-1和Expires:31 Dec 2008
<meta http-equiv="charset" content="iso-8859-1">
<meta http-equiv="expires" content="31 Dec 2008">

3. 移动端的使用
<meta name="viewport" name="width=device-width,initial-scale=1">

4. 定义搜索引擎爬虫的索引方式
<meta name="robot" content="{none|noindex|nofollow|all|index|follow}">

--------------------------------------------2020.03.05--------------------------------------------