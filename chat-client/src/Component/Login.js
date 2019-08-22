import React, { useEffect } from "react";
import "./Component.css";
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router";
import { socket } from "./../index";
import { connect } from "react-redux";

var Login = props => {
  var valueRef = React.createRef(null);
  useEffect(() => {
    socket.on("CheckLogin", mess => {
      if (mess.status === false) return;
      props.history.replace({ pathname: "/Chat" });
      props.dispatch({
        type: "SET_USER_NAME",
        username: mess.account
      });
    });
  });

  return (
    <form
      className="Login"
      onSubmit={e => {
        e.preventDefault();
        if (valueRef != null) socket.emit("Login", valueRef.current.value);
      }}
    >
      <input type="text" placeholder="Write your name" ref={valueRef} />
      <button type="submit">Register</button>
    </form>
  );
};
// var mapStateToProps = state => {
//   return {
//     history: state.history
//   };
// };
export default withRouter(connect()(Login));
