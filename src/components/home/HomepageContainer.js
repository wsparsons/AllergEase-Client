import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment
} from "semantic-ui-react";
import packagedfood from "../../images/packagedfood.jpg";
import { connect } from "react-redux";

const mapStateToProps = ({ auth }) => ({ auth });

class HomepageContainer extends Component {
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
                Spotting Your Allergies With Ease
              </Header.Content>
            </Header>
          </Container>
        </Segment>
        <Segment style={{ padding: "2em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={7} textAlign="center">
                <Header as="h3" style={{ fontSize: "2em" }} color="teal">
                  Uncover Disguised Allergens In Packaged Food
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  If you have a food allergy, you may feel that packaged food is
                  no longer your friend. But knowledge is power!
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Learn how you can spot trigger foods for your loved ones, even
                  when ingredients are opaque.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  All you need to do is select the allergen(s) and enter the
                  barcode number of the packaged food.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image circular size="large" src={packagedfood} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {this.props.auth.isLoggedIn && (
                <Grid.Column textAlign="center">
                  <Button
                    animated
                    color="teal"
                    size="big"
                    as={Link}
                    to="/allergens"
                  >
                    <Button.Content visible>
                      Check Out The Allergens
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="food" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              )}
              {!this.props.auth.isLoggedIn && (
                <Grid.Column textAlign="center">
                  <Header as="h3" style={{ fontSize: "2em" }} color="teal">
                    Sign Up To Get Started
                  </Header>
                  <Button
                    animated
                    color="teal"
                    size="big"
                    as={Link}
                    to="/signup"
                  >
                    <Button.Content visible>Sign Up</Button.Content>
                    <Button.Content hidden>
                      <Icon name="signup" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              )}
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(HomepageContainer);
