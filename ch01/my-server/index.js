const http = require('http'); // HTTP 모듈

const content = `HTTP Lecture
1. Basic
  1.1 HTTP Start
  1.2 HTTP Message

2. Web Browser
  2.1 Content Negotiation
  2.2 Cookie
`;

const handler = (req, res) => {
  res.write(content);
  res.end();
};

const server = http.createServer(handler);
server.listen(3000, () => console.log('server is running :: 3000'));

/**
 * 서버 실행: $ node ch01/my-server
 * 브라우저에서 localhost: 3000 주소로 접속하면 content 에 입력한 내용이 뜬다.
 */
