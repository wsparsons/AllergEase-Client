import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { List, Button, Checkbox, Segment } from "semantic-ui-react";


const Allergens = ({ allAllergens, userAllergens }) => {
  console.log(allAllergens);
  
  // let groupLists = allAllergens.map(allergen => {
  //   return (
  //     <List.Item>
  //       <List.Content floated="right">
  //         <Checkbox toggle checked={true} />
  //       </List.Content>
  //       <List.Header verticalAlign="bottom">
  //         {allergen.allergy.toUpperCase()}
  //       </List.Header>
  //     </List.Item>
  //   );
  // });

  return (
    <Segment>
      <List divided verticalAlign="middle">
        {/* {allAllergens.length ? groupLists : ''} */}
      </List>
    </Segment>
  );
};

export default withRouter(
  connect(
    null,
    null
  )(Allergens)
);
