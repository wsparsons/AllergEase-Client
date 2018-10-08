import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from "../../actions/auth.actions";

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch);
};

const MenuButtonLogout = ({ fixed, userLogout }) => {
  return (
    <Button
      style={{ marginLeft: "0.5em" }}
      inverted={!fixed}
      color="teal"
      onClick={() => userLogout()}
      animated
    >
      <Button.Content visible>Logout</Button.Content>
      <Button.Content hidden>
        <Icon name="sign-out" />
      </Button.Content>
    </Button>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(MenuButtonLogout);
