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
import { bindActionCreators } from "redux";
import MenuItemProfile from "./shared/MenuItemProfile";
import MenuItemSearch from "./shared/MenuItemSearch";
import MenuItemLogout from "./shared/MenuItemLogout";
import MenuItemLogin from "./shared/MenuItemLogin";
import MenuItemSignIn from "./shared/MenuItemSignUp";
import MenuButtonLogout from "./shared/MenuButtonLogout";
import MenuButtonLogin from "./shared/MenuButtonLogin";
import MenuButtonSignUp from "./shared/MenuButtonSignUp";

const mapStateToProps = ({ auth }) => ({ auth });

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: false
    };
  }

  handlePusherClick = () => {
    if (this.state.sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={this.state.sidebarOpened}
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
            {this.props.auth.isLoggedIn && <MenuItemProfile />}
            {this.props.auth.isLoggedIn && <MenuItemSearch />}
            {this.props.auth.isLoggedIn && <MenuItemLogout />}
            {!this.props.auth.isLoggedIn && <MenuItemLogin />}
            {!this.props.auth.isLoggedIn && <MenuItemSignIn />}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={this.state.sidebarOpened}
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
                    {this.props.auth.isLoggedIn && <MenuButtonLogout />}
                    {!this.props.auth.isLoggedIn && <MenuButtonLogin />}
                    {!this.props.auth.isLoggedIn && <MenuButtonSignUp />}
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
