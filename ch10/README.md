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

# 10장. 롱 폴링

- https://ko.javascript.info/long-polling
- 폴링의 단점 개선 (클라이언트가 불필요한 요청을 줄일 수 있다.)
- 장점: 네트워크 비용 절감
- 단점: 서버의 자원 낭비

<br>

## 10-1. 구조

- 서버에 요청하고 데이터가 올 때까지 대기한다. (새로운 데이터가 있을 때까지 연결을 지속한다.)
- 서버 자원을 낭비할 수 있다.
- 비유: 새로운 소식이 있나요? 잠깐만 기다려 보세요.

<br>

## 10-2. 서버 구현

- 클라이언트 대기열 준비
- 채팅 메시지 조회 기능
- 채팅 메시지 추가 기능

```shell
$ curl http://localhost:3000/longPoll -v

$ curl http://localhost:3000/update ^
--header "Content-Type: application:json" ^
--data "{\"text\": \"hello\"}" -v
```

<br>

## 10-3. 클라이언트 구현

- 지속적으로 요청 생성
- 수신한 메시지를 출력

<br>

## 10-4. 중간 정리

- HTTP 연결을 유지하기 위해 응답을 지연하는 기법
- 특징: 실시간성
- 주의사항: 서버 자원을 낭비할 수 있다.
