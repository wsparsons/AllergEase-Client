import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Allergens from "./components/Allergens";
import { verify } from "./actions/auth.actions";
import authModel from './models/auth.model'
import { bindActionCreators } from "redux";
import AuthenticatedRoute from "./components/helper/AuthenticatedRoute";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ verify }, dispatch);
};

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = async () => {
    this.props.verify();
  };

  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/search" component={Search} />
          <Route
            exact
            path="/profile"
            render={() => {
              if (this.props.auth.isLoggedIn) return <Redirect to="/profile" />;
              return <Login />;
            }}
          />
          <Route
            exact
            path="/allergens"
            render={() => {
              if (this.props.auth.isLoggedIn)
                return <Redirect to="/allergens" />;
              return <Login />;
            }}
          /> */}
          {/* <Route
            exact
            path="/login"
            render={() => {
              if (this.props.auth.isLoggedIn) return <Redirect to="/search" />;
              return <Login />;
            }}
          /> */}
          <AuthenticatedRoute
            exact
            path="/search"
            render={props => {
              return <Search />;
            }}
          />
          <AuthenticatedRoute
            exact
            path="/profile"
            render={() => {
              return <Profile />;
            }}
          />
          <Route
            exact
            path="/login"
            render={locationProps => {
              if (this.props.auth.isLoggedIn)
                return (
                  <Redirect
                    to={
                      locationProps.location.state
                        ? locationProps.location.state.from.pathname
                        : "/"
                    }
                  />
                );
              return <Login />;
            }}
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
