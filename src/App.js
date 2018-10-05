import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Responsive } from "semantic-ui-react";
import AuthenticatedRoute from "./components/helper/AuthenticatedRoute";
import HomepageLayout from "./components/responsive/HomepageLayout";
import ResponsiveContainer from "./components/responsive/ResponsiveContainer";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import Profile from "./components/profile/Profile";
import { verify } from "./actions/auth.actions";
import { getAllAllergens } from "./actions/allergens.actions"
import { bindActionCreators } from "redux";
import Search from "./components/search/Search";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ verify, getAllAllergens }, dispatch);
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.verify();
    this.props.getAllAllergens()
  };

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <ResponsiveContainer>
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
            <AuthenticatedRoute
              exact
              path="/profile"
              render={() => {
                return < Profile/>;
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
        </ResponsiveContainer>
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
