import React, { Component } from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon
} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        // style={{ margin: "2em 0em 0em", padding: "2em 0em" }}
      >
        <Container textAlign="center">
          <Icon
            inverted
            color="black"
            name="barcode"
            style={{ marginRight: "1.5em" }}
          />
          <List horizontal inverted divided link>
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
