module.exports = function(io){
  io.on('connection', function (socket) {
    console.log("socket connect")
    socket.emit('playlist', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
}
