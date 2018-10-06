import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { List, Button, Segment, Label, Header, Icon } from "semantic-ui-react";
import {
  getUserAllergens,
  removeUserAllergen
} from "../../actions/userAllergens.actions";

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
    let userAllergenList = this.props.userAllergens.userAllergens.map(
      userAllergen => {
        return (
          <List.Item key={userAllergen.id}>
            <List.Content floated="right">
              <Button
                animated
                basic
                color="red"
                onClick={() => this.onClick(userAllergen)}
              >
                <Button.Content visible>REMOVE</Button.Content>
                <Button.Content hidden>
                  <Icon name="remove" />
                </Button.Content>
              </Button>
            </List.Content>
            <List.Header verticalalign="middle">
              <Label
                size="big"
                circular
                color="teal"
                style={{ marginRight: "0.5em" }}
              >
                {userAllergen.allergy[0].toUpperCase()}
              </Label>
              {userAllergen.allergy.toUpperCase()}
            </List.Header>
          </List.Item>
        );
      }
    );
    return (
      <Segment color="red">
        <Header as="h2" textAlign="center" color="teal">
          {this.props.auth.user.first_name}
          's List
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
