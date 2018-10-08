import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MenuItemAllergens = () => {
  return (
    <Menu.Item as={Link} to="/allergens">
      <Icon
        inverted
        color="teal"
        name="food"
        style={{ marginRight: "0.5em" }}
      />
      Allergens
    </Menu.Item>
  );
};

export default MenuItemAllergens;
