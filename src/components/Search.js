import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { searchBarcode } from "../actions/search";
import ProductFound from "./ProductFound";

const mapStateToProps = state => ({
  searchLoading: state.search.searchLoading,
  showSearchError: state.search.showSearchError,
  displayProduct: state.search.displayProduct
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchBarcode }, dispatch);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: ""
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const id = parseInt(localStorage.getItem(process.env.REACT_APP_USER_ID));
    const barcode = this.state.barcode;
    this.props.searchBarcode(id, barcode);

    this.setState({
      barcode: ""
    });
  };

  render() {
    // console.log(this.props);
    
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        {/* <Grid.Column style={{ maxWidth: 450 }}> */}
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h2" color="teal" textAlign="center">
              Search Barcode Number
            </Header>
            <Form size="large" onSubmit={this.onSubmit}>
              <Form.Input
                fluid
                icon="barcode"
                iconPosition="left"
                placeholder="1234567890"
                type="integer"
                name="barcode"
                value={this.state.barcode}
                onChange={this.onChange}
                size="huge"
              />
              <Button
                color="teal"
                fluid
                size="huge"
                loading={this.props.searchLoading ? true : false}
                disabled={this.state.barcode.length > 0 ? false : true}
              >
                Search
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            { this.props.displayProduct ? <ProductFound /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
