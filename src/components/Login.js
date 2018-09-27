import React, { Component } from "react";
import { userLogin } from "../actions/auth.actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  showLoginError: state.auth.showLoginError,
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = async event => {
    event.preventDefault();

    await this.props.userLogin(this.state);

    if (this.props.isLoggedIn && !this.props.showLoginError) {
      this.props.history.push("/search");
    }
  };

  render() {
    return (
      <div>
        bluh bluh 
      </div>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
