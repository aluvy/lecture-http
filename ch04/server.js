const http = require('http');

const handler = (req, res) => {
  const cookie = req.headers['cookie'];

  if (cookie && cookie.includes('sid')) {
    res.write('Welcome Again.\n');
    res.end();
    return;
  }

  // 첫 방문
  // res.setHeader('Set-Cookie', 'sid=1');
  // res.setHeader('Set-Cookie', 'sid=1; Domain=mysite.com'); // Domain 쿠키 디렉티브
  // res.setHeader('Set-Cookie', 'sid=1; Path=/private'); // Path 쿠키 디렉티브
  // res.setHeader('Set-Cookie', 'sid=1; Max-age=10'); // 쿠키 수명 10초
  res.setHeader('Set-Cookie', 'sid=1; Secure'); // https 요청일 때만 쿠키를 싣는다.
  res.write('Welcome.\n');
  res.end();
};

const server = http.createServer(handler);
server.listen(3000, () => console.log('server is sunning ::3000'));
