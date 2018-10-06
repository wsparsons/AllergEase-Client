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
import "./styles/index.css";
import cornImage from "../../images/corn-crop.jpg";

const HomepageContainer = () => {
  return (
    <div>
      <Segment style={{ padding: "8em 0em" }} vertical id="homepageHeader">
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
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                At AllergEase
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can help you identify your allergen aliases.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Food Allergies
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                If you have a food allergy, you may feel that food is no longer
                your friend. But knowledge is power. Learn how you can identify
                your food sensitivity and spot your triggers, even when they
                appear in disguise.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image circular size="large" src={cornImage} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge" as={Link} to="/allergens" >
                Check Out The Allergens
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* <HomepageHeading mobile/> */}
      {/* <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment> */}
    </div>
  );
};

export default HomepageContainer;
