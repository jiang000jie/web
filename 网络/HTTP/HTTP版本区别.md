20020.03.02


>### HTTP/0.9

请求报文只有请求行，相应报文只有数据，文件内容是ASCII字符流传输，如GET /index.html(无状态码)

>### HTTP/1.0

支持多类型文件的下载，文件格式丰富

1. 为满足多种类型的文件，引入了请求头和响应头
2. 在请求头中指明需要
    什么格式的文件(Accept),
    怎么传输文件(Accrpt-Encoding),
    文件内容是什么语言的(Accept-Language),
    文件的编码类型(Accept-Charset)
3. 引入状态码和用户代理(User-Agent)
4. 提供了缓存机制，如Expires响应头字段，表示该资源的最大生存时间和Pragma字段

>### HTTP/1.1
1. 满足大量文件传输，节约TCP连接的时间，提出长连接，只要客户端和服务端没有明确要断开连接，TCP连接就会一直保持，该功能在该版本默认开启(connection:keep-alive)，若要断开连接，请求头添加字段connection:close(该字段在1.0版本中)即可;

目前浏览器中对于同一个域名，默认允许同时建立6个TCP持久连接。
2. 不太成熟的管线化
    一般，请求在等待响应的时候不能发送其他请求，即著名的队头阻塞问题，所以在该版本提出了管道的概念，指的是，可以将多个HTTP请求发送给服务器，但是返回的顺序必须是请求的顺序，但是最后都放弃了管线化

3. 虚拟主机的支持(Host字段)
应对一个IP，多个域名的情况，在请求头增加了Host字段

4. 对动态生成的内容提供完美支持

Transfor-Encoding:chunked提供了分块传输，使用零长度的块作为数据传输完成的标志


5. Cookie

6. 缓存机制，提供了以时间为标识的字段(Last-Modified,If-Modified-Since,If-Unmodified-Since)和以Token为标识的字段(Etag,If-Match,If-None-Match)以及Cache-Control

>### HTTP/2.0

1. HTTP/2.0是二进制协议

2. 复用协议(二进制分帧层)，解决了管线化按顺序相应请求的约束,并行请求

3. 压缩了头部信息，减少重复传输

4. 允许服务器主动

>### HTTP/3.0

1. 基于UDP之上