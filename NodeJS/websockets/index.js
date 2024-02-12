const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

// socket io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    console.log("A new user message", message);
    io.emit('message', message)
  });
  console.log("User has connected", socket.id);
});

app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
  return res.sendFile();
});

server.listen(8000, () => console.log(`Server started`));
