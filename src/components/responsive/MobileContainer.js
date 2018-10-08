import React, { Component } from "react";
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MenuItemHome from "../menu/MenuItemHome";
import MenuItemAllergens from "../menu/MenuItemAllergens";
import MenuItemProfile from "../menu/MenuItemProfile";
import MenuItemSearch from "../menu/MenuItemSearch";
import MenuItemLogout from "../menu/MenuItemLogout";
import MenuItemLogin from "../menu/MenuItemLogin";
import MenuItemSignIn from "../menu/MenuItemSignUp";
import MenuButtonLogout from "../menu/MenuButtonLogout";
import MenuButtonLogin from "../menu/MenuButtonLogin";
import MenuButtonSignUp from "../menu/MenuButtonSignUp";
import Footer from "./Footer";

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
            <MenuItemHome />
            <MenuItemAllergens/>
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
              style={{ minHeight: 80, padding: "1em 0em" }}
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
              {/* <HomepageHeading mobile /> */}
            </Segment>

            {this.props.view}
            <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(MobileContainer)
);
