import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, Item, Image, Icon } from "semantic-ui-react";

const mapStateToProps = ({ search }) => ({ search });

class ProductFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.search.searchResult);
    return this.props.search.searchResult.product ? (
      <Item.Group>
        <Item>
          <Item.Image
            size="large"
            src={this.props.search.searchResult.product.image}
          />
          <Item.Content verticalAlign="middle">
            {this.props.search.searchResult.valence ? (
              <Icon size="huge" color="red" name="thumbs down" />
            ) : (
              <Icon size="huge" color="green" name="thumbs up" />
            )}
            <Item.Header>
              {this.props.search.searchResult.product.name}
            </Item.Header>
            <Item.Meta>
              {this.props.search.searchResult.product.manufacturer}
            </Item.Meta>
            <Item.Description>
              {this.props.search.searchResult.product.ingredients}
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    ) : (
      ""
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(ProductFound);
