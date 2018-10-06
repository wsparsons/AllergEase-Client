import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MenuButtonLogin = ({ fixed }) => {
  return (
    <Button
      style={{ marginLeft: "0.5em" }}
      inverted={!fixed}
      animated
      as={Link}
      to="/login"
    >
      <Button.Content visible>Login</Button.Content>
      <Button.Content hidden>
        <Icon name="sign-in" />
      </Button.Content>
    </Button>
  );
};

export default connect(
  null,
  null
)(MenuButtonLogin);
