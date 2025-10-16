const fs = require('fs');
const path = require('path');

const serveStatic = (root) => {
  return (req, res) => {
    const filepath = path.join(root, req.url === '/' ? '/index.html' : req.url);

    fs.stat(filepath, (err, stat) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404;
          res.write('Not Found\n');
          res.end();
          return;
        }

        res.statusCode = 500;
        res.write('Internal Server Error\n');
        res.end();
        return;
      }

      const etag = `${stat.mtime.getTime().toString(16)}-${stat.size.toString(16)}`;
      const modified = stat.mtime;

      if (req.headers['if-none-match']) {
        const noneMatch = req.headers['if-none-match'];

        const isFresh = noneMatch === etag;

        if (isFresh) {
          res.statusCode = 304; // Not Modified
          res.end();
          return;
        }
      }

      if (req.headers['if-modified-since']) {
        const modifiedSince = new Date(req.headers['if-modified-since']);

        const isFresh = !(Math.floor(modifiedSince.getTime() / 1000) < Math.floor(modified.getTime() / 1000));

        if (isFresh) {
          res.statusCode = 304; // Not Modified
          res.end();
          return;
        }
      }

      res.setHeader('ETag', etag);
      res.setHeader('Last-Modified', modified.toUTCString());

      fs.readFile(filepath, (err, data) => {
        if (err) {
          if (err.code === 'ENOENT') {
            res.statusCode = 404;
            res.write('Not Found\n');
            res.end();
            return;
          }

          res.statusCode = 500;
          res.write('Internal Server Error\n');
          res.end();
          return;
        }

        const ext = path.extname(filepath).toLowerCase();
        let contentType = 'text/html';
        switch (ext) {
          case '.html':
            contentType = 'text/html';
            break;
          case '.js':
            contentType = 'text/javascript';
            break;
          case '.css':
            contentType = 'text/css';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.json':
            contentType = 'application/json';
            break;
          case '.otf':
            contentType = 'font/otf';
            break;
          default:
            contentType = 'application/octet-stream';
        }
        res.setHeader('Content-Type', contentType);

        if (ext === '.js') {
          // 자바스크립트는 한 번 다운로드 하면 1년 동안 네트워크 요청을 하지 않고 브라우저 캐시에 있는 값을 사용하도록 설정
          res.setHeader('Cache-Control', 'max-age=315360000'); // 1년
        } else if (ext === '.html') {
          // 캐시는 저장하지만 브라우저가 매번 이 캐시가 유효한지를 서버한테 확인하라는 정책
          res.setHeader('Cache-Control', 'no-cache');
        }

        res.write(data);
        res.end();
      });
    });
  };
};

module.exports = serveStatic;
