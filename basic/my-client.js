// 전용 클라이언트 프로그램

// http 요청을 만들기 위해 http 모듈을 사용한다.
const http = require("http");

// 응답 핸들러를 만든다.
const handler = (res) => {
  const data = []

  // 응답이 오면 data에 차곡차곡 기록한다.
  res.on("data", chunk => data.push(chunk.toString()))

  // 응답이 종료되면 내용을 쌓아둔 data를 출력한다.
  res.on("end", () => console.log(data.join("")))
}

// 강의 서버 주소 http://localhost:3000 으로 접속하는 url 객체를 준비한다.
const options = new URL("http://localhost:3000/")

// http 모듈의 request 함수로 서버에 요청을 보내는 request 객체를 구성한다.
const req = http.request(options, handler)

// 서버에 요청을 보낸다.
req.end()

/**
 * 새 터미널에서 클라이언트를 실행한다.
 * $ node my-client.js
 * my-server.js 에서 작성한 content 내용이 터미널에 나타난다.
 */