import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon, Container, Button } from "semantic-ui-react";
import { userLogout } from "../actions/auth.actions";
import { bindActionCreators } from "redux";

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch);
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item header>
            <Icon
              inverted
              color="black"
              name="barcode"
              style={{ marginRight: "1.5em" }}
            />
            NutriScan
          </Menu.Item>
          <Menu.Item as={Link} to="/" >Home</Menu.Item>
          <Menu.Item as={Link} to="/profile" >Profile</Menu.Item>
          <Menu.Item as={Link} to="/search" >Search</Menu.Item>

          <Menu.Item position="right">
            <Button>Log in</Button>
            <Button style={{ marginLeft: "0.5em" }}>Sign Up</Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
