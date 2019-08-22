const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const Port = process.env.PORT || 1212;

var app = express();

var server = http.Server(app);
var io = socketIo(server);
server.listen(Port, () => console.log("Server running in port " + Port));

var arrListUserOnline = [];
var arrListChat = [];

io.on("connection", function(socket) {
  console.log(socket.id + " : connected");
  //socket.emit("id", socket.id);
  //LOGIN
  socket.on("Login", message => {
    let status = true;
    if (arrListUserOnline.includes(message)) status = false;
    console.log("Account login: " + message);
    socket.emit("CheckLogin", { status, account: message });
    //USER_ONLINE
    arrListUserOnline = [...arrListUserOnline, message];
    io.sockets.emit("GetListUserOnline", arrListUserOnline);

    //BROAD_CHAT
    io.sockets.emit("NewMess", arrListChat);

    socket.on("AddMess", item => {
      console.log(item.name + " : " + item.mess);
      arrListChat = [...arrListChat, item];
      io.sockets.emit("NewMess", arrListChat);
    });

    socket.on("Typing", name => {
      console.log(name + " : " + "is typing");
      socket.broadcast.emit("HaveUserTyping", name);
    });
    socket.on("StopType", name => {
      console.log(name + " : " + "stopped typing");
      socket.broadcast.emit("StopTyping", name);
    });
  });

  socket.on("Logout", name => {
    console.log("Logout : " + name);

    //USER_ONLINE
    arrListUserOnline = arrListUserOnline.filter(x => x !== name);
    io.sockets.emit("GetListUserOnline", arrListUserOnline);
  });

  socket.on("disconnect", function() {
    console.log(socket.id + " : disconnect");
  });
});

app.get("/", (req, res) => {
  res.send("Home page. Server running okay.");
});
