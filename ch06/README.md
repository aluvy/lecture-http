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
- Request 객체
- 로그인 POST 요청 제작
- JSON 형식

<br>

## 6-3. Response 객체

- fetch()는 응답 객체로 이행하는 프라미스를 반환
- 응답 헤더
- 응답 본문

<br>

# 7장. 진행율과 취소

<br>

## 7-1. 응답 진행율

- Response: body 속성
- 서버 중비
- 응답 진행율 계산

<br>

## 7-2. 응답 취소

- AbortController
- AbortSignal
- Request: signal 속성
- 응답 취소 구현

<br>

## 7-3. 요청 진행율

- XHR 객체로 요청 진행율 계산
- progres 이벤트 활용

<br>

# 8장. 라이브러리

<br>

## 8-1. SuperAgent

- XHR 기반. 2011년 출시 콜백 스타일
- HTTP 메소드별 전용 함수
- Error 클래스를 확장한 오류 객체
- 플러그인으로 확장

<br>

## 8-2. Axios

- XHR 기반. 2014년 출시. 프라미스 기반
- HTTP 메소드별 전용 함수
- AxiosError
- 인터셉터로 확장

<br>

## 8-3. Ky

- fetch 기반. 2018년 출시. 타입스크립트
- HTTP 메소드별 전용 함수
- 프라미스 사용을 간소화
- Error 클래스를 확장한 HTTPError
- 훅으로 확장

<br>

## 8-4. Wretch

- fetch 기반. 2017년 출시. 타입스크립트
- HTTP 메소드별 전용 함수
- Error 클래스 확장한 WrechError
- 미들웨어, 에드온으로 확장
