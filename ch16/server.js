const http = require('http');
const path = require('path');
const static = require('./shared/serve-static');

const handler = (req, res) => {
  const filename = path.basename(req.url);

  // delay
  if (filename === 'script-big.js') res.delayMs = 3000;
  if (filename === 'script-small.js') res.delayMs = 1000;

  static(path.join(__dirname, 'public'))(req, res);
};

const server = http.createServer(handler);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`server is running ::${port}`));
