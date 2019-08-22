import React from "react";
import "./Component.css";

var ItemBroadChat = props => {
  return (
    <div className="ItemBroadChat">
      <p className="name">{props.children.name}</p>
      <div className="mess">{props.children.mess}</div>
    </div>
  );
};

export default ItemBroadChat;
