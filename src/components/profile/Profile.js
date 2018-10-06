import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Header, Grid, Segment } from "semantic-ui-react";
import AllergensList from "./AllergensList";
import UserAllergens from "./UserAllergens";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <Segment style={{ padding: "10em 0em" }} vertical id="homepageHeader">
          <Container text>
            <Header as="h2" style={{ fontSize: "3em" }} textAlign="center">
              <Header.Content id="homepageHeaderContent">
                AllergEase
              </Header.Content>
            </Header>
            <Header size="medium" textAlign="center">
              <Header.Content id="homepageHeaderSubheader">
                Add The Allergen To Your List
              </Header.Content>
            </Header>
          </Container>
        </Segment>
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
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(Profile)
);
