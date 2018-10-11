import React, { Component } from "react";
import {
  Container,
  Grid,
  Icon,
  Header,
  Segment
} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: "3em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row centered>
              <Grid.Column verticalAlign="middle">
                <Icon name="barcode" /> AllergEase: Spotting Your Allergies With Ease
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
              <Grid.Column textAlign="center">
                Designed By Wendy Parsons
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Header
                  inverted
                  icon="mail"
                  as="a"
                  href="mailto:wsparsons@gmail.com"
                />
                <Header
                  inverted
                  icon="linkedin"
                  target="_blank"
                  as="a"
                  href="https://www.linkedin.com/in/wendy-parsons"
                />
                <Header
                  inverted
                  icon="github"
                  target="_blank"
                  as="a"
                  href="https://github.com/wsparsons"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Icon name="copyright outline" /> Copyright 2018 All Rights
                Reserved
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
