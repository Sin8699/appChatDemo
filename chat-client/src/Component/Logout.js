import React from "react";
import "./Component.css";
import { connect } from "react-redux";
import { socket } from "./../index";
import { withRouter } from "react-router";

var Logout = props => {
  return (
    <div
      className="Logout"
      onClick={() => {
        props.history.push({ pathname: "/" });
        socket.emit("Logout", props.children);
      }}
    >
      {props.children}
      <img src="./logout.png" />
    </div>
  );
};
// var mapStateToProps = state => {
//   return {
//     history: state.history
//   };
// };
export default withRouter(Logout);
