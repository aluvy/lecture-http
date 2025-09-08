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

# 9장. 폴링

- 클라이언트가 서버에게 지속적으로 HTTP 요청을 보낸다.
- polling (당기다)
- 서버 자원이 민감한 환경에서는 이 기법을 신중하게 다뤄야 한다.

```shell
$ curl http://localhost:3000/poll -v
```

<br>

## 9-1. 구조

- 지속적인 요청으로 서버와 연결을 유지한다.
- 네트워크 대역폭과 서버 자원을 낭비할 수 있다.
- 비유: 새로운 소식이 있나요?

<br>

## 9-2. 서버 구현

- 채팅 어플리케이션 제작
- 채팅 메시지 조회 기능
- 채팅 메시지 전송 기능

<br>

## 9-3. 클라이언트 구현

- 지속적으로 요청을 생성
  - setTimeout
- 수신한 메시지를 출력

```shell

curl -v -X POST http://localhost:3000/update ^
  -H "Content-Type: application/json" ^
  --data "{\"text\":\"hello\"}"

```

<br>

## 9-4. 중간정리

- HTTP 연결을 유지하기 위해 주기적으로 요쳥을 만드는 기법
- 특징: 단순한 구현
- 주의사항 1: 네트웍과 서버 자원을 낭비할 수 있다.
- 주의사항 2: 지연 시간

- test2
