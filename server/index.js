const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app)

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server is up and spitting bars to Andre ${port}`);
});
module.exports.app = app;
