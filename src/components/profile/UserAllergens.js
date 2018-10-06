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
import {
  getUserAllergens,
  removeUserAllergen
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
  bindActionCreators({ getUserAllergens, removeUserAllergen }, dispatch);

class UserAllergens extends Component {
  constructor(props) {
    super(props);
  }

  onClick = userAllergen => {
    this.props.removeUserAllergen(this.props.auth.user.userId, userAllergen.id);
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

    let userAllergenList = this.props.userAllergens.userAllergens.map(
      userAllergen => {
        return (
          <List.Item key={userAllergen.id}>
            <List.Header verticalalign="middle">
              <Label image size="big">
                <Image src={photos[userAllergen.allergen_id - 1]} />
                {userAllergen.allergy.toUpperCase()}
                <Icon
                  name="delete"
                  onClick={() => this.onClick(userAllergen)}
                />
              </Label>
            </List.Header>
          </List.Item>
        );
      }
    );
    return (
      <Segment color="red">
        <Header as="h2" textAlign="center" color="teal">
          {this.props.auth.user.first_name}
          's Allergen
          {this.props.userAllergens.userAllergens.length > 1 ? "s" : ""}
        </Header>
        <List divided verticalalign="middle">
          {userAllergenList}
        </List>
      </Segment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAllergens);
