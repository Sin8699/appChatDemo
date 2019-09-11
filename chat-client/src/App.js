import React from "react";
import "./App.css";
import Login from "./Component/Login";
import Chat from "./Component/Chat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const history = createBrowserHistory();
var store = createStore(reducer);

var App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="title">APP CHAT</div>
        <Router>
          <Route exact path="/" component={() => <Login history={history} />} />
          <Route path="/Chat" component={() => <Chat history={history} />} />
        </Router>
      </div>
      <div
        class="fb-customerchat"
        page_id="355737088702528"
        theme_color="#0084ff"
      ></div>
      {/* <div
        class="fb-customerchat"
        attribution="setup_tool"
        page_id="355737088702528"
        theme_color="#ffaf0d"
        logged_in_greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
        logged_out_greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
      ></div> */}
    </Provider>
  );
};

export default App;
