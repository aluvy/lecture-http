# 03. AJAX

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/09/lecture-http-part3

- 직접 만들 수 있는 HTTP 요청

<hr>

- 6장. AJAX 요청과 응답: fetch 함수로 AJAX 요청과 응답을 다루는 법에 대해
- 7장. AJAX 진행율과 취소: AJAX 진행율을 계산하는 방법과 요청을 취소하는 방법에 대해
- 8장. AJAX 라이브러리: fetch와 XHR 객체 기반의 주요 AJAX 라이브러리

<br>

# 6장. 업로드와 응답

<br>

## 6-1. AJAX

- Form 요청은 비교적 느림
  - 기존 화면을 지우고 HTTP 요청을 만드는 구조
  - 화면을 다시 그리기 때문에 느리다
- AJAX, Asynchronous JavaScript and XML
  - 웹 페이지 요청과 별개로 데이터 전송만 따로 요청한다. (비동기 라고 표현)
  - 변경된 부분만 다시 그리는 방식
- XMLHttpRequest(XHR), fetch

<br>

## 6-2. Fetch API

- fetch(url, [options]) 함수
  - https://developer.mozilla.org/ko/docs/Web/API/Window/fetch
- Request 객체
- 로그인 POST 요청 제작
- JSON 형식

```javascript
fetch(resource);
fetch(resource, options);
```

<br>

## 6-3. Response 객체

- fetch()는 응답 객체로 이행하는 Promise를 반환
  - https://developer.mozilla.org/ko/docs/Web/API/Response
- 응답 헤더
  - Response.headers
- 응답 본문
  - Response.json(), Response.text(), Response.blob() 등
