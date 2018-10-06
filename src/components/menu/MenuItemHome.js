import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MenuItemHome = () => {
  return (
    <Menu.Item as={Link} to="/home" active>
      <Icon
        inverted
        color="black"
        name="barcode"
        style={{ marginRight: "0.5em" }}
      />
      Home
    </Menu.Item>
  );
};

export default connect(
  null,
  null
)(MenuItemHome);
