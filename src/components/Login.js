import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { userLogin } from "../actions/auth.actions";

const mapStateToProps = state => ({
  showLoginError: state.auth.showLoginError
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

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.userLogin(this.state);

    // if (this.props.isLoggedIn && !this.props.showLoginError) {
    //   this.props.history.push("/search");
    // } else {

    this.setState({
      email: "",
      password: ""
    });
    
    // }
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.onSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          {this.props.showLoginError && (
            <Message
              warning
              header="Could you check something!"
              content="Incorrect email or password."
            />
          )}
          <Message>
            New to NutriScan? <a href="#signup">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
