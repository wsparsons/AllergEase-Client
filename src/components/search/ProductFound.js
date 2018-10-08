import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Item, Icon } from "semantic-ui-react";

const mapStateToProps = ({ search }) => ({ search });

class ProductFound extends Component {

  render() {
    return this.props.search.searchResult.product ? (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Item.Group>
              <Item>
                <Item.Image
                  size="medium"
                  src={this.props.search.searchResult.product.image}
                />
                <Item.Content verticalAlign="middle">
                  <Item.Extra >
                    {this.props.search.searchResult.valence ? (
                      <Icon
                        circular
                        size="huge"
                        color="red"
                        name="thumbs down outline"
                      />
                    ) : (
                      <Icon
                        circular
                        size="huge"
                        color="green"
                        name="thumbs up outline"
                      />
                    )}
                  </Item.Extra>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ) : null;
  }
}

export default connect(
  mapStateToProps,
  null
)(ProductFound);
