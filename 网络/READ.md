2020年2月27日

1.HTTP

HTTP是无状态，即服务器与客户端在通信时不保留任何信息。目前版本有0.9，1.0，1.1，2.0

request报文

(请求行)    Get /index.html HTTP/1.1
(请求头)    Content-Type:application/x-www-form-urlencoded
(请求头)    Content-Length:128
(请求空行) 
(请求体)    name=lemon&age=100


response报文

(响应行)  HTTP/1.1 200 OK
(响应头)  Date:Tue,10 Jul 2020 13:16:12 GMT
(响应头)  Content-Type:text/html
(响应空行)
(响应体,即以下内容)  
<html>
......

2.常见的请求头和响应头