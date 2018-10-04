import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Allergens from "./Allergens";
import UserAllergens from './UserAllergens'


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Grid.Row centered columns={2}>
          <Grid.Column >
            <Allergens />
          </Grid.Column>
          <Grid.Column >
            <UserAllergens/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(Profile)
);
