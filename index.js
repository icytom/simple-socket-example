let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.get ('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () =>{
        console.log('user disconected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(PORT, () => {
    console.log('listening on *:3000');
});