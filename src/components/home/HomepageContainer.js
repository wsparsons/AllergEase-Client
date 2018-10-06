import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
import cornImage from "../../images/corn-crop.jpg";
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
                Spotting Your Allergen Aliases With Ease
              </Header.Content>
            </Header>
          </Container>
        </Segment>
        <Segment style={{ padding: "2em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={9} textAlign="center">
                <Header as="h3" style={{ fontSize: "2em" }} color="teal">
                  At AllergEase
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can help you identify your allergen aliases.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }} color="teal">
                  Food Allergies
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  If you have a food allergy, you may feel that packaged food is
                  no longer your friend. But knowledge is power. Learn how you
                  can identify your food sensitivity and spot your triggers,
                  even when they appear in disguise. All you need to do is enter
                  the barcode of the packaged food.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image circular size="large" src={cornImage} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {this.props.auth.isLoggedIn && (
                <Grid.Column textAlign="center">
                  <Button size="huge" as={Link} to="/allergens">
                    Check Out The Allergens
                  </Button>
                </Grid.Column>
              )}
              {!this.props.auth.isLoggedIn && (
                <Grid.Column textAlign="center">
                  <Header as="h3" style={{ fontSize: "2em" }} color="teal">
                    Sign Up To Get Started
                  </Header>
                  <Button size="huge" as={Link} to="/signup">
                    Sign Up
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
