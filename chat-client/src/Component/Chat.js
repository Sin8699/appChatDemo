import React from "react";
import "./Component.css";
import BroadChat from "./BroadChat";
import UserOnline from "./UserOnline";
import Logout from "./Logout";
import { connect } from "react-redux";

var Chat = props => {
  return (
    <div className="Chat">
      <Logout history={props.history}>{props.username}</Logout>
      <UserOnline />
      <BroadChat />
    </div>
  );
};

var mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps)(Chat);
