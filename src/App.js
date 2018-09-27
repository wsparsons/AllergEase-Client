import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          <Switch>
            {/* <Route exact path="/" component={ Home } /> */}
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/signup" />
            <Redirect to="/login" />
          </Switch>
      </div>
    );
  }
}

export default App;
