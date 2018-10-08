import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  List,
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

class AllergensList extends Component {
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

    let allergensList = filterAllergensList.map(allergen => {
      return (
        <List.Item key={allergen.id}>
          <List.Header verticalalign="middle">
            <Label image size="big">
              <Image src={photos[allergen.id - 1]} />
              <Icon
                link
                name="plus"
                onClick={() => this.onClick(allergen)}
              />
              {allergen.allergy.toUpperCase()}
            </Label>
          </List.Header>
        </List.Item>
      );
    });

    return (
      <Segment stacked color="red">
        <Header as="h2" textAlign="center" color="teal">
          Allergens
        </Header>
        <List divided verticalalign="middle">
          {allergensList}
        </List>
      </Segment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllergensList);
