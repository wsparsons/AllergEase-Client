import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const DesktopMenuItemSearch = ( ) => {
  return (
    <Menu.Item as={Link} to="/search">
      <Icon
        inverted
        color="black"
        name="search"
        style={{ marginRight: "0.5em" }}
      />
      Search
    </Menu.Item>
  );
};

export default connect(
  null,
  null
)(DesktopMenuItemSearch);
