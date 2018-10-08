import React, { Component } from "react";
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
import eggImage from "../../images/egg-crop.jpg";
import fishImage from "../../images/fish-crop.jpg";
import milkImage from "../../images/milk-crop.jpg";
import peanutImage from "../../images/peanut-crop.jpg";
import sesameImage from "../../images/sesame-crop.jpg";
import soyImage from "../../images/soy-crop.jpg";
import sulphiteImage from "../../images/sulphite-crop.jpg";
import treenutImage from "../../images/treenut-crop.jpg";
import wheatImage from "../../images/wheat-crop.jpg";

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
    const element = document.getElementById(`allergen${index}`);
    element.scrollIntoView({ behavior: "smooth", inline: "start" });

    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    this.props.getAllAllergens();
    window.scrollTo(0, 0);
  }

  render() {
    let photos = [
      cornImage,
      eggImage,
      fishImage,
      milkImage,
      peanutImage,
      sesameImage,
      soyImage,
      sulphiteImage,
      treenutImage,
      wheatImage
    ];

    let allergensallergens = this.props.allergens.allAllergens.map(allergen => {
      return (
        <Grid container stackable verticalAlign="middle" key={allergen.id}>
          <Grid.Row id={`allergen${allergen.id - 1}`}>
            <Grid.Column floated="left" width={6}>
              <Image circular size="large" src={photos[allergen.id - 1]} />
            </Grid.Column>
            <Grid.Column width={9}>
              <Header as="h3" style={{ fontSize: "2em" }} textAlign="center" color="teal">
                {allergen.allergy.toUpperCase()}
              </Header>
              <Accordion fluid styled>
                <Accordion.Title
                  active={this.state.activeIndex === allergen.id - 1}
                  index={allergen.id - 1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  What are the aliases?
                </Accordion.Title>
                <Accordion.Content
                  active={this.state.activeIndex === allergen.id - 1}
                >
                  <p>
                    {allergen.aliases.map(
                      (alias, index) => (index ? ", " : "") + alias.description
                    )}
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    });
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
                We've identified the 10 most common allergens and their aliases.
              </Header.Content>
            </Header>
          </Container>
        </Segment>
        <Segment style={{ padding: "2em" }} vertical>
          {allergensallergens}
        </Segment>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllergensContainer);
