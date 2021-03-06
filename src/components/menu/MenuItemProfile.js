import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MenuItemProfile = () => {
  return (
    <Menu.Item as={Link} to="/profile">
      <Icon
        inverted
        color="teal"
        name="user"
        style={{ marginRight: "0.5em" }}
      />
      Profile
    </Menu.Item>
  );
};

export default connect(
  null,
  null
)(MenuItemProfile);
