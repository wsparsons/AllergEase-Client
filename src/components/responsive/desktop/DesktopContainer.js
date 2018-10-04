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
import HomepageHeading from "../HomepageHeading";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import DesktopMenuItemProfile from "./DesktopMenuItemProfile";
import DesktopMenuItemSearch from "./DesktopMenuItemSearch";
import DesktopMenuButtonLogout from "./DesktopMenuButtonLogout";
import DesktopMenuButtonSignIn from "./DesktopMenuButtonSignIn";
import DesktopMenuButtonSignUp from "./DesktopMenuButtonSignUp";

const mapStateToProps = ({ auth }) => ({ auth });

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    };
  }
  // state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
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
              fixed={this.state.fixed ? "top" : null}
              inverted={!this.state.fixed}
              pointing={!this.state.fixed}
              secondary={!this.state.fixed}
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

                {this.props.auth.isLoggedIn && <DesktopMenuItemProfile />}
                {this.props.auth.isLoggedIn && <DesktopMenuItemSearch />}

                <Menu.Item position="right">
                  {this.props.auth.isLoggedIn && (
                    <DesktopMenuButtonLogout fixed={this.state.fixed} />
                  )}
                  {!this.props.auth.isLoggedIn && (
                    <DesktopMenuButtonSignIn fixed={this.state.fixed} />
                  )}
                  {!this.props.auth.isLoggedIn && (
                    <DesktopMenuButtonSignUp fixed={this.state.fixed} />
                  )}
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
