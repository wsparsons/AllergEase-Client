import React, { Component } from "react";
import {
  Container,
  Header,
  Segment
} from "semantic-ui-react";
import Search from './Search'

const SearchContainer = () => (
  <Segment style={{ padding: "5em 0em" }} vertical>
    <Container text>
      <Header as="h3" style={{ fontSize: "2em" }} textAlign="center">
        allerg-EAZE : Spotting Your Allergen Aliases With Eaze 
      </Header>
      <Grid container stackable verticalAlign="middle">

      </Grid>
    </Container>
  </Segment>
);

export default SearchContainer;
