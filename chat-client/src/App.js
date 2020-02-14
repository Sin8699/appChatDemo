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
  console.log(window.location);
  return (
    <Provider store={store}>
      <div className="App">
        <div className="title">APP CHAT</div>
        <Router>
          <Route exact path="/" component={() => <Login history={history} />} />
          <Route path="/Chat" component={() => <Chat history={history} />} />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
