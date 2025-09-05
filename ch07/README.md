# 03. AJAX

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/09/lecture-http-part3

- 직접 만들 수 있는 HTTP 요청

<hr>

- 6장. AJAX 요청과 응답: fetch 함수로 AJAX 요청과 응답을 다루는 법에 대해
- 7장. AJAX 진행율과 취소: AJAX 진행율을 계산하는 방법과 요청을 취소하는 방법에 대해
- 8장. AJAX 라이브러리: fetch와 XHR 객체 기반의 주요 AJAX 라이브러리

<br>

# 7장. 진행율과 취소

<br>

## 7-1. 응답 진행율

업로드나 다운로드 시 사용자에게 진행율을 알려줄 수 있다.
https://developer.mozilla.org/ko/docs/Web/API/Response#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EB%A9%94%EC%84%9C%EB%93%9C

- Response.body 속성
  - https://developer.mozilla.org/en-US/docs/Web/API/Response/body
  - https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
- 서버 준비
- 응답 진행율 계산

```shell
$ curl http://localhost:3000/chunk -v
```

<br>

## 7-2. 응답 취소

- AbortController
  - https://developer.mozilla.org/ko/docs/Web/API/AbortController
- AbortSignal
  - https://developer.mozilla.org/ko/docs/Web/API/AbortSignal
- Request: signal 속성
  - https://developer.mozilla.org/en-US/docs/Web/API/Request/signal
- 응답 취소 구현

<br>

## 7-3. 요청 진행율

- XHR 객체로 요청 진행율 계산
- progres 이벤트 활용
