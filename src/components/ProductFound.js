import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Item, Image, Icon } from "semantic-ui-react";

const mapStateToProps = state => ({
  searchResult: state.search.searchResult
});

class ProductFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("product result", this.props.searchResult.product);

    return (
      <Item>
        {this.props.searchResult.valence ? (
          <Icon size="massive" color='red' name="thumbs down" />
        ) : (
          <Icon size="massive" color='green' name="thumbs up" />
        )}
        <Item.Image size="large" src={this.props.searchResult.product.image} />
        <Item.Content>
          <Item.Header as="a">
            {this.props.searchResult.product.name}
          </Item.Header>
          <Item.Description>
            {this.props.searchResult.product.ingredients}
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ProductFound)
);
