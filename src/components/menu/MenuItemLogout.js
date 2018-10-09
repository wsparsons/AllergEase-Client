import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from "../../actions/auth.actions";

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch);
};

const MenuItemLogout = ({ userLogout }) => {
  return (
    <Menu.Item onClick={() => userLogout()}>
      <Icon
        inverted
        color="teal"
        name="sign-out"
        style={{ marginRight: "0.5em" }}
      />
      Logout
    </Menu.Item>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(MenuItemLogout);
