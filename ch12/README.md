# 04. 추가 프로토콜

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

# 12장. 웹 소켓

- https://ko.javascript.info/websocket

<br>

## 12-1. 구조

- HTTP는 단방향성의 한계가 있음
- 웹 소켓 프로토콜
- WebSocket API

<br>

### 12-1-1. 웹 소켓 설치

```bash
$ cd ch12 // 폴더 이동
$ npm init // npm 초기화 하여 자동으로 package.json 파일 생성
$ npm i ws@8  // 웹 소켓 8버전 설치
```

- package.json에 dependencies 에 웹 소켓 버전이 추가 됨

```javascript
"dependencies": {
    "ws": "^8.18.3"
  }
```

```shell
$ nc localhost 3000 -c
GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-Websocket-Version: 13

HTTP:1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+x0o=

?Welcome
```

<br>

### 12-1-2. 웹 브라우저 콘솔창에서 테스트

웹 브라우저 콘솔 창에 아래 내용을 입력

```shell
const ws = new WebSocket('sw://localhost:3000');
ws.send('Hello');
```

개발자모드 Network 탭에서 확인할 수 있다.

- Response Headers

```text
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: 3/lD4DJB9zdAehX5JZzCruDgpDs=
```

- Request Headers

```text
GET ws://localhost:3000/ HTTP/1.1
Host: localhost:3000
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36
Upgrade: websocket
Origin: http://localhost:3000
Sec-WebSocket-Version: 13
...
```

<br>

## 12-2. 서버 구현

- https://github.com/websockets/ws?tab=readme-ov-file#external-https-server
- 웹 소켓을 웹서버와 통합
- 클라이언트 대기열 준비
- 채팅 기능 구현
- HTTP가 메시지를 서로 주고 받았다면, 웹 소켓은 프레임을 주고 받는다.

<br>

- 채팅: 클라이언트에서 받은 메시지를 다른 클라이언트에게 그대로 전달한다.

<br>

## 12-3. 클라이언트 구현

- 채팅 UI
- 웹 소켓 연결
- 수신한 메시지를 클릭
- 메시지 전송

<br>

## 12-4. 중간 정리

- 웹 소켓 프로토콜
- WebSocket API
- 특징: 실시간 양방향 통신
- 주의사항: 연결 관리
