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
                Profile
              </Menu.Item>
            ) : null}
            {this.props.auth.isLoggedIn ? (
              <Menu.Item as={Link} to="/search">
                Search
              </Menu.Item>
            ) : null}

            {/* <Menu.Item as="a">Profile</Menu.Item>
            <Menu.Item as="a">Search</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item> */}
            {this.props.auth.isLoggedIn ? (
              <Menu.Item onClick={this.onClick}>Logout</Menu.Item>
            ) : (
              <div>
                <Menu.Item
                  styple={{ marginLeft: "0.5em" }}
                  as={Link}
                  to="/login"
                >
                  Login In
                </Menu.Item>
                <Menu.Item
                  style={{ marginLeft: "0.5em" }}
                  as={Link}
                  to="/signup"
                >
                  Sign Up
                </Menu.Item>
              </div>
            )}

            {/* <Menu.Item as="a">Log In</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item> */}
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
                      >
                        Logout
                      </Button>
                    ) : (
                      <div>
                        <Button
                          styple={{ marginLeft: "0.5em" }}
                          inverted
                          as={Link}
                          to="/login"
                        >
                          Login In
                        </Button>
                        <Button
                          style={{ marginLeft: "0.5em" }}
                          inverted
                          as={Link}
                          to="/signup"
                        >
                          Sign Up
                        </Button>
                      </div>
                    )}
                    {/* <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button> */}
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
    null
  )(MobileContainer)
);
