const http = require('http');
const path = require('path');
const static = require('./shared/serve-static');

const handler = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // 출처명시: http://localhost:3000 도 사용 허용한다.
  res.setHeader('Access-Control-Allow-Headers', 'X-Foo'); // 커스텀 헤더 이름 명시
  static(path.join(__dirname, 'public'))(req, res);
};

const server = http.createServer(handler);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`server is running ::${port}`));

// $ PORT=3001 node ch14/server
