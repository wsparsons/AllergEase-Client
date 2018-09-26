import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Switch>
        <Route />
        {/* <Route exact path ="/register" render={() => {
          return <Register />
        }} />
        <Route exact path ="/login" render={() => {
          return <Login />
        }} />
        <Redirect to="/login" /> */}
      </Switch>

    );
  }
}

export default App;
