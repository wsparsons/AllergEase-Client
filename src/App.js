import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { connect } from "react-redux";


const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" component={ Home } /> */}
          <Route
            exact
            path="/login"
            render={() => {
              if (this.props.isLoggedIn) return <Redirect to="/search" />;
              return <Login />;
            }}
          />
          <Route exact path="/search" component={ NavBar } /> 
          {/* <Route exact path="/signup" /> */}
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, null)(App));
