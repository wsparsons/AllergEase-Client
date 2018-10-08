import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthenticatedRoute from "./components/helper/AuthenticatedRoute";
import HomepageContainer from "./components/home/HomepageContainer";
import AllergensContainer from "./components/allergens/AllergensContainer";
import ResponsiveContainer from "./components/responsive/ResponsiveContainer";
import LoginContainer from "./components/registration/LoginContainer";
import SignUpContainer from "./components/registration/SignUpContainer";
import SearchContainer from "./components/search/SearchContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import { verify } from "./actions/auth.actions";
import { getAllAllergens } from "./actions/allergens.actions";
import { bindActionCreators } from "redux";

const mapStateToProps = ({ auth, allergens }) => ({ auth, allergens });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ verify, getAllAllergens }, dispatch);
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
        <ResponsiveContainer>
          <Switch>
            <Route exact path="/home" component={HomepageContainer} />
            <Route exact path="/allergens" component={AllergensContainer} />
            }} />
            <AuthenticatedRoute
              exact
              path="/search"
              render={() => {
                return <SearchContainer />;
              }}
            />
            <AuthenticatedRoute
              exact
              path="/profile"
              render={() => {
                return <ProfileContainer />;
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
                return <LoginContainer />;
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
                return <SignUpContainer />;
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
