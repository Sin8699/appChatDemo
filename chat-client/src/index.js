import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import socketIOClient from "socket.io-client";

export const socket = socketIOClient("https://appchatdemo.herokuapp.com/");

ReactDOM.render(<App />, document.getElementById("root"));
