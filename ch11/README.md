# 03. AJAX

🔗 https://github.com/jeonghwan-kim/lecture-http  
🔗 https://jeonghwan-kim.github.io/2024/07/10/lecture-http-part4

<br>

- HTTP의 비연결성을 극복하는 다양한 기술

<hr>

- 9장. 폴링: 클라이언트가 주기적으로 서버에 요청을 보내서 새로운 데이터를 확인하는 방법
- 10장. 롱 폴링: 폴링보다 효율적인 통신 기법
- 11장. SSE: 서버가 클라이언트로 실시간 데이터를 푸시하는 방법
- 12장. 웹 소켓: 클라이언트와 서버 간의 양방향 통신 프로토콜

<br>

# 11장. SSE

- SSE(Server Sent Event, HTML5) 서버가 클라이언트로 메시지를 전달하는 프로토콜
- https://developer.mozilla.org/ko/docs/Web/API/Server-sent_events/Using_server-sent_events#필드
- https://ko.javascript.info/server-sent-events

```shell
< Content-Type: text/event-stream
<
data: Hello

data: Hello again

```

<br>

## 11-1. 구조

- 서버가 실시간으로 메시지를 보낸다.
- 리소스를 효율적으로 사용할 수 있다.
- 비유: 새 소식이 오면 알려주세요.

<br>

## 11-2. 서버 구현

- 클라이언트 대기열 준비
- 알림 구독 기능
- 채팅 메시지 추가 기능

<br>

## 11-3. 클라이언트 구현

- EventSource
- 수신한 메시지 출력

<br>

## 11-4. 재연결

- EventSource 객체는 서버와 연결이 끊기면 다시 연결. retry로 설정
- 이전에 받은 메시지가 있다면 last-event-id 헤더에 값을 실어서 보낸다.

<br>

## 11-5. 중간 정리

- 클라이언트와 서버 연결 유지 및 실시간 메시지 전송 기법
- EventSource
- 특징: 실시간 알림을 위한 프로토콜
- 주의사항: 단방향 메시지
