# HTTP
HTTP 超文本传输协议 协议详细规定了浏览器与万维网之间传递的详细规则

## 请求报文
重点是格式与参数
```
行      POST（请求类型） url以及参数  HTTP/1.1 （http版本）
头      Host: atguigu.com
        Cookie: name = guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin(Post请求可以有，Get请求没有)
```

## 响应报文
```
行                               HTTP/1.1    200（响应结果码）      OK（响应结果文字描述）
头(注意格式,属性不需要专门记)    Content-Type: text/html;charset+utf-8
                               Content-length: 2048
                               Content-encoding: gzip
空行
体(响应体) <html>代码
```

*404
*500


