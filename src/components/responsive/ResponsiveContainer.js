import React from "react";

import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

const ResponsiveContainer = (props) => (
  <div>
    <DesktopContainer view={props.children}/>
    <MobileContainer view={props.children}/>
  </div>
);

export default ResponsiveContainer;
