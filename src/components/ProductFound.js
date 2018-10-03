import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, Item, Image, Icon } from "semantic-ui-react";

const mapStateToProps = state => ({
  searchResult: state.search.searchResult
});

class ProductFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Image
            size="large"
            src={this.props.searchResult.product.image}
          />
          <Item.Content verticalAlign="middle">
            {this.props.searchResult.valence ? (
              <Icon size="huge" color="red" name="thumbs down" />
            ) : (
              <Icon size="huge" color="green" name="thumbs up" />
            )}
            <Item.Header>{this.props.searchResult.product.name}</Item.Header>
            <Item.Meta>
              {this.props.searchResult.product.manufacturer}
            </Item.Meta>
            <Item.Description>
              {this.props.searchResult.product.ingredients}
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ProductFound)
);
