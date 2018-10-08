import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Item, Icon } from "semantic-ui-react";

const mapStateToProps = ({ search }) => ({ search });

class ProductFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.search.searchResult.product ? (
      <Grid>
        <Grid.Row centered>
          <Grid.Column verticalAlign="middle">
            {this.props.search.searchResult.valence ? (
              <Icon size="huge" color="red" name="thumbs down" />
            ) : (
              <Icon size="huge" color="green" name="thumbs up" />
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Item.Group>
            <Item>
              <Item.Image
                size="medium"
                src={this.props.search.searchResult.product.image}
              />
              <Item.Content verticalAlign="middle">
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
        </Grid.Row>
      </Grid>
    ) : null;
  }
}

export default connect(
  mapStateToProps,
  null
)(ProductFound);
