const http = require('http');
const path = require('path');
const static = require('./shared/serve-static');

const handler = (req, res) => {
  const filename = path.basename(req.url);

  // delay
  if (filename === 'script-big.js') res.delayMs = 3000;
  if (filename === 'script-small.js') res.delayMs = 1000;

  if (filename === 'cat.jpg') res.delayMs = 1000;
  if (filename === 'dog.jpg') res.delayMs = 1000;

  if (filename === 'index-next.html') {
    res.delayMs = 3000;
    res.setHeader('Cache-Control', 'max-age=3600'); // for firefox
  }

  static(path.join(__dirname, 'public'))(req, res);
};

const server = http.createServer(handler);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`server is running ::${port}`));
