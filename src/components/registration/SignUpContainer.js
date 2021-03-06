import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Form,
  Grid,
  Icon,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { userSignUp } from "../../actions/auth.actions";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userSignUp }, dispatch);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.userSignUp(this.state);

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Segment style={{ padding: "10em 0em" }} vertical id="signupContainer">
        <Container text>
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header
                as="h1"
                color="teal"
                textAlign="center"
                id="signupContainerHeader"
              >
                Sign Up For An Account
              </Header>
              <Form
                loading={this.props.auth.isLoading ? true : false}
                size="large"
                onSubmit={this.onSubmit}
              >
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="First Name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Last Name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="mail"
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
                  <Button
                    animated
                    color="teal"
                    fluid
                    size="large"
                    disabled={
                      this.state.first_name.length > 0 &&
                      this.state.last_name.length > 0 &&
                      this.state.email.length > 0 &&
                      this.state.password.length > 0
                        ? false
                        : true
                    }
                  >
                    <Button.Content visible>Sign Up</Button.Content>
                    <Button.Content hidden>
                      <Icon name="signup" />
                    </Button.Content>{" "}
                  </Button>
                </Segment>
              </Form>
              {this.props.auth.showSignupError && (
                <Message
                  error
                  header="Action Forbidden"
                  content="You can only sign up for an account once with a given e-mail address."
                />
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
