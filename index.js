const http = require('http');
const Game = require('./src/Game')
const game = new Game()
let app = http.createServer();

game.start()
// Start the server on port 3000
app.listen(3000, '127.0.0.1');
