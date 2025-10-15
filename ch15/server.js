const https = require('https'); // https 모듈
const fs = require('fs');
const path = require('path');

const options = {
  // 디지털 인증서
  key: fs.readFileSync(path.join(__dirname, './server.key')), // 키
  cert: fs.readFileSync(path.join(__dirname, './server.cert')), // 인증서
};

const handler = (req, res) => {
  res.write('Hello\n');
  res.end();
};

const server = https.createServer(options, handler);
server.listen(3000, () => console.log('server is running ::3000'));
