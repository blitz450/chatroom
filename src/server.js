const express = require('express');
const path = require('path');
const http = require('http');
const testRoutes = require('../routes/testRoutes');
// const socketio = require('socket.io');

const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/test', testRoutes);

// io.on('connection', socket => {
//   console.log('New WebSocket connection');

//   socket.emit('reportAdded', notif);
// });

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = require('./socket').init(server);
io.on('connection', socket => {
  console.log('Client connected');
});
