import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ auth }) => ({ auth });

const AuthenticatedRoute = props => {
  return (
    <Route
      {...props}
      render={locationProps => {
        return props.auth.isLoggedIn ? (
          props.render(locationProps)
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: locationProps.location } }}
          />
        );
      }}
    />
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(AuthenticatedRoute)
);
