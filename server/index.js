const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app)
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'john',
    text: 'wassup playa',
    createdAt: 123123
  });

  socket.on('createMessage', (message) => {
    console.log('create message', message);
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up and spitting bars to Andre ${port}`);
});
module.exports.app = app;
