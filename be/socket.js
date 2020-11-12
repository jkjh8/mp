module.exports = function(io){
  io.on('connection', function (socket) {
    console.log("socket connect")
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
}
