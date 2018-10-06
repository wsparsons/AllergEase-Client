import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon, Container, Button } from "semantic-ui-react";
import { userLogout } from "../../actions/auth.actions";
import { bindActionCreators } from "redux";

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch);
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  onClick = event => {
    event.preventDefault();
    this.props.userLogout();
  };

  render() {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <Icon
              inverted
              size="big"
              color="black"
              name="barcode"
              style={{ marginRight: "0.5em" }}
            />
            NutriScan
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
          {/* <Menu.Item as={Link} to="/profile">
            Profile
          </Menu.Item>
          <Menu.Item as={Link} to="/search">
            Search
          </Menu.Item> */}
          <Menu.Item position="right">
            {this.props.auth.isLoggedIn ? (
              <Button style={{ marginLeft: "0.5em" }} onClick={this.onClick}>
                Logout
              </Button>
            ) : (
              <div>
                <Button style={{ marginLeft: "0.5em" }} as={Link} to="/login">
                  Log In
                </Button>
                <Button style={{ marginLeft: "0.5em" }} as={Link} to="/signup">
                  Sign Up
                </Button>
              </div>
            )}

            {/* {!this.props.auth.isLoggedIn && (
              <Button style={{ marginLeft: "0.5em" }} as={Link} to="/login">
                Log In
              </Button>
            )} */}

            {/* {!this.props.auth.isLoggedIn && (
              <Button style={{ marginLeft: "0.5em" }} as={Link} to="/login">
                Log In
              </Button>
            )} */}
            {/*             
            <Button style={{ marginLeft: "0.5em" }} as={Link} to="/signup" >Log In</Button>
            <Button style={{ marginLeft: "0.5em" }}>Sign Up</Button> */}
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
