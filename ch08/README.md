# 03. AJAX

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/09/lecture-http-part3

- 직접 만들 수 있는 HTTP 요청

<hr>

- 6장. AJAX 요청과 응답: fetch 함수로 AJAX 요청과 응답을 다루는 법에 대해
- 7장. AJAX 진행율과 취소: AJAX 진행율을 계산하는 방법과 요청을 취소하는 방법에 대해
- 8장. AJAX 라이브러리: fetch와 XHR 객체 기반의 주요 AJAX 라이브러리

<br>

# 8장. 라이브러리

<br>

## 8-1. SuperAgent

- https://github.com/forwardemail/superagent
- https://github.com/forwardemail/superagent?tab=readme-ov-file#plugins
- XHR 기반. 2011년 출시. 콜백 스타일
- HTTP 메소드별 전용 함수
- Error 클래스를 확장한 오류 객체
- 플러그인으로 확장

<br>

## 8-2. Axios

- https://github.com/axios/axios
- XHR 기반. 2014년 출시. 프라미스 기반
- HTTP 메소드별 전용 함수
- AxiosError
- 인터셉터로 확장

<br>

## 8-3. Ky

- fetch 기반. 2018년 출시. 타입스크립트

<br>

## 8-4. Wretch
