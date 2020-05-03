let app = require('express')();
let http = require('http').createServer(app);
var io = require('socket.io')(http);


const PORT = process.env.PORT || 3000;

app.get ('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(PORT, () => {
    console.log('listening on *:3000');
});