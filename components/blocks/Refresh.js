import React from "react";
import { RefreshControl } from "react-native";

const Refresh = props => (
  <RefreshControl
    {...props}
    tintColor={"#FFF"}
    titleColor={"#FFF"}
    colors={["#FFF"]}
    title=""
  />
);

export default Refresh;
