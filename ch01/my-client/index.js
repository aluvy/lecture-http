const http = require('http'); // HTTP 모듈

// $ node my-client <url>
const url = process.argv[2];

if (!url) {
  console.error('Usage: node ch01/my-client <url>');
  process.exit();
}

const options = new URL(url);

const handler = (res) => {
  const data = [];

  // data event
  res.on('data', (chunk) => {
    data.push(chunk.toString());
  });

  // end event
  res.on('end', () => {
    console.log(data.join(''));
  });
};

// options에 명시한 주소로 요청을 보낸다.
// 응답이 오면 handler 함수가 동작한다.
const req = http.request(options, handler);

req.end();

/**
 * 클라이언트 실행: $ node ch01/my-client http://localhost:3000/ch01.txt
 */
