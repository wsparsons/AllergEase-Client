import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";
import AllergensList from "./AllergensList";
import UserAllergens from "./UserAllergens";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment style={{ padding: "2em" }} vertical>
        <Grid stackable>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <AllergensList />
            </Grid.Column>
            <Grid.Column>
              <UserAllergens />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(Profile)
);
