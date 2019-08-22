import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import socketIOClient from "socket.io-client";

export const socket = socketIOClient("192.168.1.43:1212");

ReactDOM.render(<App />, document.getElementById("root"));
