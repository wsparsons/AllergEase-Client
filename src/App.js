import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import AuthenticatedRoute from "./components/helper/AuthenticatedRoute";
import NavBar from "./components/shared/NavBar";
import Home from "./components/shared/Home";
import HomepageLayout from "./components/responsive/HomepageLayout";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import { verify } from "./actions/auth.actions";
import { bindActionCreators } from "redux";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ verify }, dispatch);
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.verify();
  };

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/home" component={HomepageLayout} />
          <AuthenticatedRoute
            exact
            path="/search"
            render={() => {
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
          <Route
            exact
            path="/signup"
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
              return <SignUp />;
            }}
          />
          <Redirect to="/home" />
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
