import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  List,
  Button,
  Segment,
  Label,
  Image,
  Header,
  Icon
} from "semantic-ui-react";
import { getAllAllergens } from "../../actions/allergens.actions";
import {
  getUserAllergens,
  addUserAllergen
} from "../../actions/userAllergens.actions";
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

const mapStateToProps = ({ auth, allergens, userAllergens }) => ({
  auth,
  allergens,
  userAllergens
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getAllAllergens, getUserAllergens, addUserAllergen },
    dispatch
  );

class Allergens extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllAllergens();
    this.props.getUserAllergens(this.props.auth.user.userId);
  }

  onClick = allergen => {
    this.props.addUserAllergen(this.props.auth.user.userId, allergen.id);
  };

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

    let filterAllergensList = this.props.allergens.allAllergens.filter(
      all =>
        !this.props.userAllergens.userAllergens.find(
          user => all.id === user.allergen_id
        )
    );

    let list = filterAllergensList.map(allergen => {
      return (
        <List.Item key={allergen.id}>
          <List.Content floated="left">
            <Button animated color="red" onClick={() => this.onClick(allergen)}>
              <Button.Content visible>REMOVE</Button.Content>
              <Button.Content hidden>
                <Icon name="remove" />
              </Button.Content>
            </Button>
          </List.Content>
          <List.Header verticalalign="middle">
            <Label image size="large">
              <Image src={photos[allergen.id - 1]} />
              <Icon
                link
                name="plus"
                disabled
                onClick={() => this.onClick(allergen)}
              />
              {allergen.allergy.toUpperCase()}
            </Label>
          </List.Header>
        </List.Item>
      );
    });

    let allergensList = this.props.allergens.allAllergens.map(allergen => {
      return (
        <List.Item key={allergen.id}>
          <List.Content floated="left">
            <Button
              animated
              basic
              color="green"
              disabled={
                !!this.props.userAllergens.userAllergens.find(
                  userAllergen => userAllergen.allergen_id === allergen.id
                )
              }
              onClick={() => this.onClick(allergen)}
            >
              <Button.Content visible>ADD</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </List.Content>

          <List.Header verticalalign="middle">
            <Label image size="large">
              <Image src={photos[allergen.id - 1]} />
              <Icon
                link
                name="plus"
                disabled
                onClick={() => this.onClick(allergen)}
              />
              {allergen.allergy.toUpperCase()}
            </Label>
            {/* <Label
              size="big"
              circular
              color="teal"
              style={{ marginRight: "0.5em" }}
            >
              {allergen.allergy[0].toUpperCase()}
            </Label> */}
            {/* {allergen.allergy.toUpperCase()} */}
          </List.Header>
        </List.Item>
      );
    });

    console.log(filterAllergensList);

    return (
      <Segment color="green">
        <Header as="h2" textAlign="center" color="teal">
          Allergens
        </Header>
        <List divided verticalalign="middle">
          {list}
        </List>
      </Segment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Allergens);
