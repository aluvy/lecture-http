const http = require('http');
const querystring = require('querystring');

const database = {
  products: ['Product 1', 'Product 2'],
  session: {},
};

const parseCookie = (req) => {
  const cookies = (req.headers.cookie || '').split(';');
  const cookieObj = {};
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    cookieObj[decodeURIComponent(name)] = decodeURIComponent(value);
  });

  return cookieObj;
};

const login = (req, res) => {
  const createSession = () => `session-id-${Date.now()}`;
  const findUser = () => ({
    name: 'Alice',
    email: 'alice@email.com',
  });

  const sid = createSession();
  const user = findUser();

  database.session = {
    [sid]: user,
  };

  // index로 리다이렉션
  res.statusCode = 301;
  res.setHeader('Location', '/');
  res.setHeader('Set-Cookie', `sid=${sid}; HttpOnly;`); // 세션 하이재킹 예방
  res.setHeader('Set-Cookie', `sid=${sid}; SameSite=Strict;`); // CSRF 예방
  res.end();
};

const logout = (req, res) => {
  const sid = parseCookie(req)['sid'] || '';
  delete database.session[sid];

  res.statusCode = 301;
  res.setHeader('Location', '/');
  res.setHeader('Set-Cookie', 'sid=;Max-Age=-1');
  res.end();
};

const postProduct = (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body = body + chunk.toString();
  });

  req.on('end', () => {
    const { product } = querystring.parse(body);

    const escapedProduct = product.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    database.products.push(escapedProduct);

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  });
};

const report = (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body = body + chunk.toString();
  });

  req.on('end', () => {
    // JSON 형태의 본문을 받는다.
    const report = JSON.parse(body);

    // 리포트를 출력한다.
    console.log('CSP Report:', report);

    res.end();
  });
};

// index.html 동적으로 만들기
const index = (req, res) => {
  const sid = parseCookie(req)['sid'] || '';
  const userAccount = database.session[sid] || '';

  res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Content-Security-Policy', 'default-src "self"'); // Content-Security-Policy 응답 헤더
  // res.setHeader('Content-Security-Policy-Report-Only', 'default-src "self"; report-uri /report'); // Content-Security-Policy-Report-Only 응답 헤더
  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          input {width: 600px;}
          @font-face {
            font-family: 'MyCustomFont;
            src: url('http://other-origin.com/MyCustomFont.woff2');
          }
        </style>
      </head>
      <body style="font-family: 'MyCustomFont';">
        ${userAccount ? userAccount.name + ', ' + userAccount.email : 'Guest'}
        <input type="hidden" value="my-csrf-token">
        <form method="POST" action="/product">
          <input type="text" name="product">
          <button type="submit">Add</button>
        </form>
        <ul>
          ${database.products.map((product) => `<li>${product}</li>`).join('')}
        </ul>
      </body>
    </html>
  `);
  res.end();
};

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname === '/login') return login(req, res);
  if (pathname === '/logout') return logout(req, res);
  if (pathname === '/product') return postProduct(req, res);

  if (pathname === '/report') return report(req, res);

  index(req, res);
});

server.listen(3000, () => console.log('server is running ::3000'));
