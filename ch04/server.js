const http = require("http");

const handler = (req, res) => {
  const cookie = req.headers['cookie'];

  // 재 방문 시
  if (cookie && cookie.includes('sid')) {
    res.write('Welcome again');
    res.end();
    return;
  }

  // 첫 방문 시
  res.setHeader('Set-Cookie', 'sid=1')
  res.write('Welcome.')
  res.end();
}

const server = http.createServer(handler);
server.listen(3000, ()=> console.log('server is running: 3000'));