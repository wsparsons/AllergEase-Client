import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const MenuButtonSignUp = ({ fixed }) => {
  return (
    <Button
      style={{ marginLeft: "0.5em" }}
      inverted={!fixed}
      animated
      as={Link}
      to="/signup"
    >
      <Button.Content visible>Sign Up</Button.Content>
      <Button.Content hidden>
        <Icon name="signup" />
      </Button.Content>
    </Button>
  );
};

export default connect(
  null,
  null
)(MenuButtonSignUp);
