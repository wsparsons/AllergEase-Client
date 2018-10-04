import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";
import { searchBarcode } from "../../actions/search";
import ProductFound from "./ProductFound";

const mapStateToProps = ({ search, auth }) => ({
  search,
  auth
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
    const id = this.props.auth.user.userId;
    const barcode = this.state.barcode;
    this.props.searchBarcode(id, barcode);

    this.setState({
      barcode: ""
    });
  };

  render() {
    return (
      <Grid style={{ height: "100%" }}>
        {/* <Grid.Column style={{ maxWidth: 450 }}> */}
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Header as="h2" color="teal" textAlign="center">
              Search Barcode Number
            </Header>
            <Form onSubmit={this.onSubmit}>
              <Form.Input
                fluid
                icon="barcode"
                iconPosition="left"
                placeholder="1234567890"
                type="integer"
                name="barcode"
                value={this.state.barcode}
                onChange={this.onChange}
                size="large"
              />
              <Button
                color="teal"
                fluid
                size="large"
                loading={this.props.search.searchLoading ? true : false}
                disabled={this.state.barcode.length > 0 ? false : true}
              >
                Search
              </Button>
            </Form>
            {this.props.search.showSearchError ? (
              <Message warning header="Could Not Find Product" align="center" />
            ) : null}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={14}>
            {this.props.search.displayProduct ? <ProductFound /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
