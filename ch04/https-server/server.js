const https = require("https");
const fs = require("fs");
const path = require("path");

const handler = (req, res) => {
  const cookie = req.headers['cookie'];

  // 재 방문 시
  if (cookie && cookie.includes('sid')) {
    res.write('Welcome again');
    res.end();
    return;
  }

  // 첫 방문 시
  res.setHeader('Set-Cookie', 'sid=1; Secure;');
  res.write('Welcome.')
  res.end();
}

const options = {
  key: fs.readFileSync(path.join(__dirname, './server.key')),
  cert: fs.readFileSync(path.join(__dirname, './server.cert')),
}

const server = https.createServer(options, handler);
server.listen(3000, ()=> console.log('server is running: 3000'));