import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Visibility
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

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  onClick = event => {
    event.preventDefault();
    this.props.userLogout();
  };

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 400, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as={Link} to="/home" active>
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

                <Menu.Item position="right">
                  {this.props.auth.isLoggedIn ? (
                    <Button
                      style={{ marginLeft: "0.5em" }}
                      inverted={!fixed}
                      onClick={this.onClick}
                    >
                      Logout
                    </Button>
                  ) : (
                    <div>
                      <Button
                        styple={{ marginLeft: "0.5em" }}
                        inverted={!fixed}
                        as={Link}
                        to="/login"
                      >
                        Login In
                      </Button>
                      <Button
                        style={{ marginLeft: "0.5em" }}
                        inverted={!fixed}
                        primary={fixed}
                        as={Link}
                        to="/signup"
                      >
                        Sign Up
                      </Button>
                    </div>
                  )}

                  {/* <Button as="a" inverted={!fixed}>
                    Log In
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button> */}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(DesktopContainer)
);
