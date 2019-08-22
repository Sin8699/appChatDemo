import React, { useEffect } from "react";
import "./Component.css";
import ItemBroadChat from "./ItemBroadChat";
import { connect } from "react-redux";
import { socket } from "./../index";

var BroadChat = props => {
  var mess = React.createRef(null);
  useEffect(() => {
    socket.on("NewMess", arr => {
      props.dispatch({ type: "SET_LOG_CHAT", arr });
    });
    socket.on("HaveUserTyping", name => {
      props.dispatch({ type: "SET_TYPING", show: true, name });
    });
    socket.on("StopTyping", name => {
      props.dispatch({ type: "SET_TYPING", show: false, name });
    });
  });
  return (
    <div className="BroadChat">
      <div className="ListMess">
        {props.listChat.map((x, index) => (
          <ItemBroadChat key={index}>{x}</ItemBroadChat>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("SUBMIT");
          socket.emit("AddMess", {
            name: props.username,
            mess: mess.current.value
          });
          mess.current.value = null;
        }}
      >
        <input
          type="text"
          placeholder="Write message..."
          ref={mess}
          onFocus={() => {
            socket.emit("Typing", props.username);
            console.log("Focus");
          }}
          onBlur={() => {
            console.log("Blur");
            socket.emit("StopType", props.username);
          }}
        />
        <button type="submit">Send</button>
      </form>
      {props.userTyping.showTyping && (
        <p>{`${props.userTyping.name} is typing`}</p>
      )}
    </div>
  );
};
var mapStateToProps = state => {
  return {
    listChat: state.listChat,
    username: state.username,
    userTyping: state.userTyping
  };
};
export default connect(mapStateToProps)(BroadChat);
