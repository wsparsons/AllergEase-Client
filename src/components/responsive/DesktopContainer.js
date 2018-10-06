import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MenuItemHome from "../menu/MenuItemHome";
import MenuItemProfile from "../menu/MenuItemProfile";
import MenuItemSearch from "../menu/MenuItemSearch";
import MenuButtonLogout from "../menu/MenuButtonLogout";
import MenuButtonLogin from "../menu/MenuButtonLogin";
import MenuButtonSignUp from "../menu/MenuButtonSignUp";

import HomepageHeading from "./HomepageHeading";
// import HomepageLayout from "./HomepageLayout";
import Footer from "../shared/Footer";

const mapStateToProps = ({ auth }) => ({ auth });

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    };
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
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
            // style={{ minHeight: 400, padding: "1em 0em" }}
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
                <MenuItemHome />
                {this.props.auth.isLoggedIn && <MenuItemProfile />}
                {this.props.auth.isLoggedIn && <MenuItemSearch />}

                <Menu.Item position="right">
                  {this.props.auth.isLoggedIn && (
                    <MenuButtonLogout fixed={this.state.fixed} />
                  )}
                  {!this.props.auth.isLoggedIn && (
                    <MenuButtonLogin fixed={this.state.fixed} />
                  )}
                  {!this.props.auth.isLoggedIn && (
                    <MenuButtonSignUp fixed={this.state.fixed} />
                  )}
                </Menu.Item>
              </Container>
            </Menu>
            {/* <HomepageHeading /> */}
          </Segment>
        </Visibility>

        {this.props.view}
        {/* <HomepageLayout /> */}
        <Footer/>
      </Responsive>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(DesktopContainer)
);
