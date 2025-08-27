const http = require('http'); // HTTP 모듈
const path = require('path');
const fs = require('fs');

const static = (req, res) => {
  // /public 폴더 아래에 있는 txt 폴더의 경로를 얻는 표현식
  const filepath = path.join(__dirname, 'public', req.url);

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.write('Not Found\n');
      res.end();
      return;
    }

    res.write(data);
    res.end();
  });
};

const handler = (req, res) => static(req, res);

const server = http.createServer(handler);
server.listen(3000, () => console.log('server is running :: 3000'));

/**
 * 서버 실행: $ node ch01/my-server
 * 브라우저에서 localhost: 3000 주소로 접속하면 content 에 입력한 내용이 뜬다.
 */
