const http = require('http');

const csrf = (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        CSRF
        <!-- img 태그를 사용해 공격 대상인 mysite.com:3000 으로 요청을 보낸다. -->
        <img src="http://mysite.com:3000">
      </body>
    </html>
  `);
  res.end();
};

const server = http.createServer(csrf);
server.listen(3002, () => console.log('server is running ::3002'));
