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
import { userLogin } from "../../actions/auth.actions";

const mapStateToProps = ({ auth }) => ({ auth });

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
    this.props.userLogin(this.state);

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Segment style={{ padding: "10em 0em" }} vertical id="loginContainer">
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
                id="loginContainerHeader"
              >
                Log In To Your Account
              </Header>
              <Form
                loading={this.props.auth.isLoading ? true : false}
                size="large"
                onSubmit={this.onSubmit}
              >
                <Segment stacked>
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
                      this.state.email.length > 0 &&
                      this.state.password.length > 0
                        ? false
                        : true
                    }
                  >
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                      <Icon name="sign-in" />
                    </Button.Content>
                  </Button>
                </Segment>
              </Form>
              {this.props.auth.showLoginError && (
                <Message
                  warning
                  header="Could you check something!"
                  content="Incorrect email or password."
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
