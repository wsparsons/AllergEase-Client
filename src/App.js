import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { verify } from "./actions/auth.actions";
import { bindActionCreators } from "redux";
import AuthenticatedRoute from "./components/helper/AuthenticatedRoute";
import { Menu, Container, Image, Dropdown } from "semantic-ui-react";

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
        <NavBar />
        <Container style={{ marginTop: "7em" }}>
          <Switch>
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
            <Route exact path="/" component={Home} />
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
        </Container>
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
