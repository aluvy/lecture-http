# 02. 브라우저

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/08/lecture-http-part2

- 웹 개발 시 가장 많이 사용하는 HTTP 클라이언트는 웹 브라우저
- 우리가 모르는 사이에 브라우저는 HTTP 요청을 만들고 서버 응답에 자동으로 반응한다.

<hr>

- 3장. 컨텐츠 협상: 웹브라우저가 서버와 데이터를 주고 받을 때 최적의 형태로 만들기 위한 매커니즘을 이해할 수 있다.
- 4장. 쿠키: 서버가 웹 브라우저를 식별하기 위한 방법인 쿠키에 대해 배울 수 있다.
- 5장. 네트워크 요청: 웹 브라우저에서 발생할 수 있는 HTTP 요청의 종류에 대해 알 수 있다.

<br>

# 4장. 쿠키

- 쿠키의 시초: 매킥 쿠키. 쇼핑카트
- HTTP 관점으로 보아야 쿠키를 제대로 이해할 수 있다.
  - HTTP 헤더나 보안을 위한 옵션 등이 있어서 쿠키는 HTTP 관점으로 바라봐야 더 정확하게 이해할 수 있다.

> 쿠키가 브라우저 저장소 중 하나라고 알고 있는 경우가 있는데, 다른 저장소와 조금 다르다.  
> 쿠키와 다른 브라우저 저장소와 다른 점: 서버에서 값을 만들어 네트워크에 실은 뒤에 브라우저에 저장하는 구조

<br>

## 4.1 쿠키 헤더

- 무상태 HTTP
- Set-Cookie 응답 헤더와 Cookie 요청 헤더

```shell
< Set-Cookie: sid=1 # sid: session id
> Cookie: sid=1
```

- 클라이언트를 식별할 수 있는 서버 제작

<br>

## 4.2 쿠키 유효 범위

Set-Cookie 응답 헤더를 받은 브라우저가 이후에 발생할 모든 HTTP 요청에 이 값을 보내지는 않는다.  
기본적으로 같은 도메인으로 요청할 때만 쿠키를 전달한다.  
므라우저가 쿠키와 도메인을 함께 기억한다.

- Domain 쿠키 디렉티브

```shell
< Set-Cookie: sid=1; Domain=mysite.com
```

- Path 쿠키 디렉티브
  - /private 경로로 요청할때만 쿠키를 보낸다.

```shell
< Set-Cookie: sid=1; Path=/private
```

<br>

## 4.3 쿠키 생명주기

브라우저는 종료될 때 쿠키를 삭제한다.  
서버와 브라우저 간의 연결을 세션이라고 부르는데, 세션과 같은 수명의 쿠키를 세션쿠키라고 부른다.  
Max-Age와 Expries는 쿠키 수명을 지정하는 쿠키 디렉티브이다.  
서버는 브라우저가 쿠키를 얼마나 오래 저장할 지 지정할 수 있다. (초 단위로 설정)

- 세션 쿠키 (Session Cookie)
- Max-Age와 Expries 쿠키 디렉티브

```shell
< Set-Cookie: sid=1, Max-Age=10 # 10초
```

- 영속적인 쿠키(Permanent Cookie): 세션과 상관없이 일정 기간 유지하는 쿠키

<br>

## 4.4 쿠키 Secure

쿠키는 평문을 사용한다.  
누구라도 중간에 네트워크 패킷을 가로채면 읽을 수 있다는 말이다.  
TCP와 HTTP 중간에 보안 계층인 TLS(Transport Layer Security) 를 추가하면 통신 패킷을 가로채도 해석할 수 없는데 바로 이것이 HTTPS이다.
쿠키를 HTTPS로 전달하면 보안계층에 의해서 암호화 된다.  
패킷을 가로채더라도 쿠키값을 읽을 수 없다.

여기서는 HTTP에서만 동작하는 쿠키 디렉티브를 살펴본다.

- 쿠키는 평문이라 유출될 수 있다.
- Secure 쿠키 디렉티브

```shell
< Set-Cookie: sid=1; Secure
```

<br>

### 4.4.1 인증서 만들기 (https 서버 만들기)

- ch04 폴더에 https-server 폴더 생성
- 폴더에 인증서 만들기

```shell
$ cd ch04/https-server
$ openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

엔터를 치면 몇가지 묻는데

- Country Name (2 letter code) [AU]: KO
- State or Province Name (full name) [Some-State]: Seoul

정도만 쓰고 나머지는 엔터,  
실행하면 ch04/https-server 폴더에 server.cert 파일과 server.key 파일이 생성되어 있다.

- server.key: private key
- server.cert: 인증서

위 2 파일을 사용하면 https 서버를 만들 수 있다.  
server.js 설정을 마친 후 https://localhost:3000/ 로 접속 가능

<br>

## 4.5 쿠키 HttpOnly

<br>

## 4.6 쿠키 라이브러리(서버)

<br>

## 4.7 쿠키 라이브러리(브라우저)
