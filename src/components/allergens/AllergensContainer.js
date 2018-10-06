import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Accordion,
  Container,
  Icon,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
import { getAllAllergens } from "../../actions/allergens.actions";
import { bindActionCreators } from "redux";
import cornImage from "../../images/corn-crop.jpg";
// import eggImage from "../../images/egg-crop.jpg";
// import fishImage from "../../images/fish-crop.jpg";
// import milkImage from "../../images/milk-crop.jpg";
// import peanutImage from "../../images/peanut-crop.jpg";
// import sesameImage from "../../images/sesame-crop.jpg";
// import soyImage from "../../images/soy-crop.jpg";
// import sulphiteImage from "../../images/sulphite-crop.jpg";
// import treenutImage from "../../images/treenut-crop.jpg";
// import wheatImage from "../../images/wheat-crop.jpg";
import AllergenAliases from "./AllergensAliases";

const mapStateToProps = ({ allergens }) => ({ allergens });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllAllergens }, dispatch);

class AllergensContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    this.props.getAllAllergens();
  }

  render() {
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
                We have identify the 10 most common allergens and their aliases.
              </Header.Content>
            </Header>
          </Container>
        </Segment>
        <Segment style={{ padding: "2em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Corn
                </Header>
                <Accordion fluid styled>
                  <Accordion.Title
                    active={this.state.activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    What are the aliases?
                  </Accordion.Title>
                  <Accordion.Content active={this.state.activeIndex === 0}>
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </Accordion.Content>
                </Accordion>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image circular size="large" src={cornImage} />
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
    mapStateToProps,
    mapDispatchToProps
  )(AllergensContainer)
);
