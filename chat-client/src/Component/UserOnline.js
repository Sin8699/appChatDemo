import React, { useEffect } from "react";
import "./Component.css";
import { connect } from "react-redux";
import { socket } from "./../index";

var UserOnline = props => {
  useEffect(() => {
    socket.on("GetListUserOnline", mess => {
      props.dispatch({ type: "GET_LIST_USER_ONLINE", arr: mess });
    });
  });
  return (
    <div className="UserOnline">
      <div className="header">User Online</div>
      <div className="ListUser">
        {props.listOnline.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>
    </div>
  );
};
var mapStateToProps = state => {
  return {
    listOnline: state.listOnline
  };
};

export default connect(mapStateToProps)(UserOnline);
