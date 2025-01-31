# HTTP

🔗 https://github.com/jeonghwan-kim/lecture-http

## cURL
🔗 cURL 다운로드: https://curl.se/download.html
- client for URL의 약자. URL을 받아 서버로 요청을 보내고 받은 응답을 출력하는 도구
- cURL로 HTTP 요청 및 응답 확인하기
``` shell
$ which curl
$ curl http://localhost:3000/ch01.txt
$ curl http://localhost:3000/ch01.txt -v
$ curl http://localhost:3000/ch01.txt --verbose
```

- 결과
``` shell
* Host localhost:3000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> GET /ch01.txt HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
> 
* Request completely sent off
< HTTP/1.1 200 OK
< Date: Fri, 31 Jan 2025 08:51:06 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
< 
HTTP Lecture

Chapter 1. Basic
  1.1 HTTP Start
* Connection #0 to host localhost left intact
  1.2 HTTP Message%
```