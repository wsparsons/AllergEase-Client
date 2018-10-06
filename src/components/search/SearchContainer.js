import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Search from "./Search";

const mapStateToProps = ({ auth }) => ({ auth });

class SearchContainer extends Component {
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
                Search The Barcode Of A Packaged Food
              </Header.Content>
            </Header>
          </Container>
        </Segment>
        <Segment style={{ padding: "2em" }} vertical>
          <Search />
        </Segment>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(SearchContainer)
);
