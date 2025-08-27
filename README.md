# HTTP

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/07/lecture-http-part1

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

## 2.2 URL

```shell
프로토콜://도메인:포트/경로?쿼리문자열#앵커
```

- Uniform Resource Locator
- URL: 클라이언트와 요청을 보낼 때 대상이 되는 것
- 일정한 방식의 자원, 위치 탐사기, 인터넷 상의 파일 위치를 지정하는 방식

### 2.2.1 프로토콜

> <b>http:</b>//도메인:포트/경로?쿼리문자열#앵커

- URL은 프로토콜 이름으로 시작한다.
- 프로토콜은 URL의 종류를 결정하는 역할을 한다.
- http 라고 하면 웹 문서를 식별하는 URL
- 다른 프로토콜
  - mailto: 이메일 전송용 프로토콜
  - tel: 전화를 위한 프로토콜

### 2.2.2 도메인

> http://<strong style="font-size: 1.4em">localhost</strong>:포트/경로?쿼리문자열#앵커

- 서버의 위치를 나타냄
- 도메인의 IP를 알려주는 서버인 Domain Name System. 줄여서 DNS에 도메인 주소를 전달하면 IP주소를 얻을 수 있다.
- 도메인 위치에 IP주소를 바로 사용해도 됨

### 2.2.3 포트

> http://localhost<strong  style="font-size: 1.4em">:3000</strong>/경로?쿼리문자열#앵커

- IP로 접속한 서버는 여러 개의 포트가 있음
- 클라이언트는 특정 포트를 통해 서버에 접속하고, 특정 어플리케이션에 접속할 수 있다.
- 포트는 0부터 65535 사이의 정수값을 쓴다.
  - 0 ~ 1023: 정해진 포트 (사용하려면 운영체제의 관리자 권한이 있어야 한다.)
    - http 프로토콜: 80
    - https 프로토콜: 443
    - 파일 전송을 위한 프로토콜: 22
    - shell: 22
    - email: 25 등
  - 1024 ~ 49151: 등록된 포트
    - 개발환경 구성 시 사용
  - 나머지
    - 동적 포트 (일시적으로 클라이언트가 서버와 통신하기 위한 포트)

### 2.2.4 경로

> http://localhost:3000<strong  style="font-size: 1.4em">/ch01.txt</strong>?쿼리문자열#앵커

- 서버가 제공하는 파일의 위치
- 경로
- 상황에 따라서는 서버의 실제 경로가 아닐 수도 있다. (서버 구현에 따라 다르다.)
- 서버가 외부에 제공하는 추강화된 개념이라고 이해하는것이 더 좋다.

### 2.2.5 쿼리문자열

> http://localhost:3000/ch01.txt<strong  style="font-size: 1.4em">?query=name</strong>#앵커

- 서버에 추가로 정보를 전달할 때 사용
- 경로 뒤에 ? 로 시작하며 key=value 형태, 하나 이상일 때는 &로 연결

### 2.2.6 프레그먼트

> http://localhost:3000/ch01.txt?query=name<strong  style="font-size: 1.4em">#title</strong>

- 웹페이지 내에 특정 위치를 가리킴
- html 마크업 id 속성과 매칭 됨

## 2.3 요청, 리퀘스트

- 클라이언트에서 서버로 전달하는 메시지

```shell
# 요청 헤더
> GET /ch01.txt HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
>
```

> GET / ch01.txt HTTP/1.1

- GET: 메소드
  - 클라이언트와 서버 간의 요청 방식을 정의
  - 클라이언트가 서버에게 어떤 작업을 수행할지를 메서드로 전달
  - 메소드
    - GET: 서버로부터 자원을 요청할 때 사용
    - POST: 서버로 데이터를 전송하고 서버는 이 일을 처리해 새로운 자원을 생성
    - PUT: 서버의 리소스 교체
    - PATCH: 서버의 리소스를 부분적으로 교체
    - DELETE: 서버의 특성 리소스를 삭제
- /ch01.txt: 경로
  - 서버의 어떤 파일을 가리키는지 알려줌
- HTTP/1.1: 프로토콜 버전

> Host: localhost: 3000

- Host: localhost:3000: 요청을 보낼 호스트와 포트번호 (서버의 위치)

> User-Agent: curl/8.7.1

- User-Agent: 클라이언트 정보
  - curl을 사용했기 때문에 curl/8.7.1 이라는 값으로 나타남
  - 브라우저라면 브라우저 이름이 실린다.

> Acccept: \*/\*

- Accept: 클라이언트가 어떤 컨텐츠 타입을 받을 수 있는지 표시하는 값
  - \*/\*: 어떤 컨텐츠 타입이든 받을 수 있다는 의미
- 요청 헤더의 마지막을 빈 줄로 입력하면 요청헤더가 끝났다 라는 의미

### 요청 헤더의 종류

- Accept
- Accept-Encoding
- Accept-Language
- User-Agent
- Cookie
- Origin

- 캐싱 관련

  - If-Modifyied-Since
  - If-None-Match

- 보안 관련
  - Access-Control-Allow-Headers
  - Access-Control-Allow-Method

```shell
- 예시에는 없지만 헤더가 끝난 뒤에는 요청 본문을 실을 수 있다.
- 요청 헤더와 달리 요청 본문은 method에 따라서 선택사항 임
- POST나 PUT, PATCH 같은 method에서는 사용할 수 있다.
```
