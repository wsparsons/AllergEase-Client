import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import HomepageHeading from "./HomepageHeading";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { userLogout } from "../../actions/auth.actions";
import { bindActionCreators } from "redux";

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch);
};

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  onClick = event => {
    event.preventDefault();
    this.props.userLogout();
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              <Icon
                inverted
                color="black"
                name="barcode"
                style={{ marginRight: "0.5em" }}
              />
              Home
            </Menu.Item>
            {this.props.auth.isLoggedIn ? (
              <Menu.Item as={Link} to="/profile">
                <Icon
                  inverted
                  color="black"
                  name="user"
                  style={{ marginRight: "0.5em" }}
                />
                Profile
              </Menu.Item>
            ) : null}
            {this.props.auth.isLoggedIn ? (
              <Menu.Item as={Link} to="/search">
                <Icon
                  inverted
                  color="black"
                  name="search"
                  style={{ marginRight: "0.5em" }}
                />
                Search
              </Menu.Item>
            ) : null}
            {this.props.auth.isLoggedIn ? (
              <Menu.Item onClick={this.onClick}>
                <Icon
                  inverted
                  color="black"
                  name="sign-out"
                  style={{ marginRight: "0.5em" }}
                />
                Logout
              </Menu.Item>
            ) : null}
            {!this.props.auth.isLoggedIn ? (
              <Menu.Item as={Link} to="/login">
                <Icon
                  inverted
                  color="black"
                  name="sign-in"
                  style={{ marginRight: "0.5em" }}
                />
                Login
              </Menu.Item>
            ) : null}
            {!this.props.auth.isLoggedIn ? (
              <Menu.Item as={Link} to="/signup">
                <Icon
                  inverted
                  color="black"
                  name="signup"
                  style={{ marginRight: "0.5em" }}
                />
                Sign Up
              </Menu.Item>
            ) : null}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 200, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    {this.props.auth.isLoggedIn ? (
                      <Button
                        style={{ marginLeft: "0.5em" }}
                        inverted
                        onClick={this.onClick}
                        animated
                      >
                        <Button.Content visible>Logout</Button.Content>
                        <Button.Content hidden>
                          <Icon name="sign-out" />
                        </Button.Content>
                      </Button>
                    ) : null}
                    {!this.props.auth.isLoggedIn ? (
                      <Button
                        style={{ marginLeft: "0.5em" }}
                        inverted
                        animated
                        as={Link}
                        to="/login"
                      >
                        <Button.Content visible>Login</Button.Content>
                        <Button.Content hidden>
                          <Icon name="sign-in" />
                        </Button.Content>
                      </Button>
                    ) : null}
                    {!this.props.auth.isLoggedIn ? (
                      <Button
                        style={{ marginLeft: "0.5em" }}
                        inverted
                        animated
                        as={Link}
                        to="/signup"
                      >
                        <Button.Content visible>Sign Up</Button.Content>
                        <Button.Content hidden>
                          <Icon name="signup" />
                        </Button.Content>
                      </Button>
                    ) : null}
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MobileContainer)
);
