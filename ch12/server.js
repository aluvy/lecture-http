const http = require('http');
const path = require('path');
const { WebSocketServer } = require('ws');
const static = require('./shared/serve-static');
const Message = require('./shared/message');

const handler = (req, res) => {
  static(path.join(__dirname, 'public'))(req, res);
};

const server = http.createServer(handler);
server.listen(3000, () => console.log('server is running ::3000'));

const webSocketServer = new WebSocketServer({ server });
const webSocketClients = [];

// 연결
webSocketServer.on('connection', (webSocket) => {
  console.log('connection handshaking');

  const message = new Message('서버와 연결되었습니다.');
  webSocket.send(`${message}`);

  webSocketClients.push(webSocket);

  webSocket.on('message', (data) => {
    for (const webSocketClient of webSocketClients) {
      const text = `${webSocket === webSocketClient ? 'me:' : 'other:'} ${data.toString('utf-8')}`;
      const message = new Message(text);
      webSocketClient.send(`${message}`);
    }
  });
});
