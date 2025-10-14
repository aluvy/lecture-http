# 05. 보안

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/11/lecture-http-part5

<hr>

- 브라우저 보안과 함께 HTTP 통신을 더 안전하게 만드는 LTS
- 13장. 브라우저 보안
  - XSS (크로스 사이트 스크립팅)와 같은 공격 기법과 이를 방지하기 위한 브라우저 보안정책
- 14장. CORS
  - 외부 도메인의 자원을 안전하게 활용하기 위한 CORS 정책과 적용 방법
- 15장. HTTPS
  - HTTPS가 네트워크 보안을 강화하는 방식과 TLS의 역할

<br>

# 14장. CORS

- https://ko.javascript.info/fetch-crossorigin
- https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/CORS
- https://github.com/expressjs/cors

<br>

## 14-1. CORS의 동작 원리

- 용어 정리: 출처, 교차 출처 요청
  - 출처: URL에 프로토콜, 호스트, 포트 세가지를 모아서 출처라고 한다.
    - 이 세가지가 같으면 출처가 같다 라고 표현한다.
    - 이 중에 하나라도 다르면 출처가 다르다 라고 표현한다.
  - 교차 출처 요청: 다른 출처의 자원을 사용하기 위해 네트워크 요청을 만드는걸 말한다.
- 재현: 웹 서버 준비
- 재현: 교차 출처 요청
- 해결: 서버가 허용할 출처를 명시한다.

<br>

## 14-2. 단순 요청

- GET, POST, HEAD 메소드를 사용한다.
- 안전한 헤더를 사용한다.
  - https://developer.mozilla.org/ko/docs/Glossary/CORS-safelisted_request_header
  - 안전하지 않은 헤더를 사용하려면, 서버는 이 응답 헤더에 허용할 헤더 이름을 명시해줘야 한다.

<br>

## 14-3. 사전 요청

- PUT, PATCH, DELETE 메소드를 사용한다.
- 사전 요청 캐시

<br>

## 14-4. CORS를 사용하는 요청

- fetch 함수, XMLHttpRequest 객체
- 웹 폰트 (@font-face)

<br>

## 14-5. 중간 정리

- CORS의 동작 원리
- 단순 요청
- 사전 요청
- CORS를 사용하는 요청
