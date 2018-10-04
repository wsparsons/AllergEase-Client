import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, List, Button, Image } from "semantic-ui-react";
import { getAllAllergens } from "../actions/allergens.action";
import { getUserAllergens } from "../actions/userAllergens.action";
import Allergens from "./Allergens";
import UserAllergens from './UserAllergens'


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              PROFILE
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column width={7}>
            <Allergens />
          </Grid.Column>
          <Grid.Column width={7}>
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
