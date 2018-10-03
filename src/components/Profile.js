import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, List, Button, Image } from "semantic-ui-react";
import { getAllAllergens, getUserAllergens } from "../actions/allergens";
import Allergens from "./Allergens";

const mapStateToProps = ({ allergens, auth }) => ({ allergens, auth });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllAllergens, getUserAllergens }, dispatch);

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount () {
    await this.props.getAllAllergens();
    await this.props.getUserAllergens(this.props.auth.user.userId);
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              Select Your Allergen(s)
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Allergens allAllergens={this.props.allergens} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
