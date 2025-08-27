# 01. HTTP 기본

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/07/lecture-http-part1

- 1장. HTTP 시작: 웹의 탄생 배경과 역사에 대해 알 수 있다.
- 2장. HTTP 메시지: HTTP의 주요 요소에 대해 배울 수 있다.

<br>

# 1장. HTTP 시작

<br>

## 1.1 문서 배포

- 웹 어플리케이션의 동작 원리와 HTTP의 역할
- HTTP로 전하는 강의
- 간단한 강의 제공 어플리케이션 구현

- HTTP의 초기 버전

```shell
$ node ch01/my-server
```

- 서버 실행
- 서버(http://localhost:3000)를 열고 커멘드 라인 명령어에 입력한 주소의 파일 내용을 띄운다.

<br>

## 1.2 더 많은 문서

- 더 많은 수업 자료를 여러 페이지로 제공하려면 파일로 분리
- 파일 기반 컨텐츠 제공 서버
- 동적 URL 지원 클라이언트

<br>

## 1.3 HTTP/0.9

- HTTP 초기 버전:
  - 1989년 버너스리가 제안
  - HTML: 하이퍼 텍스트 마크업 언어
  - HTTP: 하이퍼 텍스트 전송 규약
  - httpd: HTTP 서버 프로그램
  - World Wide Web: 최초의 웹 클라이언트
  - 1990년 프로토콜 완성
  - 1991년 외부 공개
- 이후 버전:
  - 1996년 http/1.0
  - 1997년 http/1.1
  - 2015년 http/2
  - 2018년 http/3
- HTTP 핵심 요소
  - URL
  - 헤더
  - 본문
  - 상태코드

<br>

## 1.4 cURL

🔗 cURL 다운로드: https://curl.se/download.html

- client for URL의 약자. URL을 받아 서버로 요청을 보내고 받은 응답을 출력하는 도구
- cURL로 HTTP 요청 및 응답 확인하기

```shell
$ curl http://localhost:3000/ch01.txt -v
$ curl http://localhost:3000/ch01.txt --verbose
```

- 결과

```shell
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
