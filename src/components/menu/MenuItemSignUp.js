import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MenuItemSignUp = () => {
  return (
    <Menu.Item as={Link} to="/signup">
      <Icon
        inverted
        color="teal"
        name="signup"
        style={{ marginRight: "0.5em" }}
      />
      Sign Up
    </Menu.Item>
  );
};

export default connect(
  null,
  null
)(MenuItemSignUp);
