// 노드 http 모듈로 웹 서버를 만든다.
const http = require("http")

// 서버가 제공할 강의 컨텐츠 입니다.
const content = `HTTP Lecture

1. Basic
  1.1 HTTP Start
  1.2 HTTP Message
2. Web Browser
  2.1 Content Negotiation
  2.2 Cookie
`

// 이 컨텐츠로 요청을 처리할 핸들러 함수를 만든다.
const handler = (req, res) => res.end(content)

// 위 핸들러로 http 서버 객체를 하나 만든다.
const server = http.createServer(handler)

// 서버는 3000번 포트에서 요청을 기다리게 된다.
server.listen(3000, () => console.log("server is running :: 3000"))

/**
 * 터미널에서 서버를 실행한다
 * $ node my-server.js
 * server is running :: 3000 콘솔이 터미널에 찍히게 된다.
 * 웹 브라우저에서 localhost:3000 을 입력하면 위의 content 내용이 브라우저에 띄워진다.
 */