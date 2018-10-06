import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MenuItemLogin = () => {
  return (
    <Menu.Item as={Link} to="/login">
      <Icon
        inverted
        color="black"
        name="sign-in"
        style={{ marginRight: "0.5em" }}
      />
      Login
    </Menu.Item>
  );
};

export default connect(
  null,
  null
)(MenuItemLogin);
