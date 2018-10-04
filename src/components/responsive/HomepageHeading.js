import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Container, Header, Icon } from "semantic-ui-react";
import "./styles/styles.css";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="NutriScan"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0
        // marginTop: mobile ? "1.5em" : "1.5em"
      }}
    />
    <Header
      as="h6"
      content="If you have a food allergy, you may feel that food is no longer your friend. But knowledge is power. Learn how you can identify your food sensitivity and spot your triggers, even when they appear in disguise."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal"
        // marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="big">
      See Allergens
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
