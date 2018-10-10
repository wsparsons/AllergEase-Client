import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Form,
  Icon,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { searchBarcode } from "../../actions/search.actions";
import ProductFound from "./ProductFound";

const mapStateToProps = ({ search, auth }) => ({ search, auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchBarcode }, dispatch);
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: "845561000423"
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
      <Container>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Search Barcode Number
              </Header>
              <Form onSubmit={this.onSubmit}>
                <Segment stacked>
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
                    animated
                    fluid
                    color="teal"
                    size="large"
                    loading={this.props.search.searchLoading ? true : false}
                    disabled={this.state.barcode.length > 0 ? false : true}
                  >
                    <Button.Content visible>Search</Button.Content>
                    <Button.Content hidden>
                      <Icon name="search" />
                    </Button.Content>
                  </Button>
                </Segment>
              </Form>
              {this.props.search.showSearchError ? (
                <Message
                  warning
                  header="Could Not Find Product"
                  align="center"
                />
              ) : null}
            </Grid.Column>
          </Grid.Row>
          {this.props.search.displayProduct ? <ProductFound /> : null}
        </Grid>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
