import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

const DesktopMenuButtonLogin = ({ fixed }) => {
  return (
    <Button
      style={{ marginLeft: "0.5em" }}
      inverted={!fixed}
      onClick={this.onClick}
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
  null
)(DesktopMenuButtonLogin);
