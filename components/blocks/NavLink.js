import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import Text from "./Text";

const Link = styled.TouchableOpacity`
  height: 50px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
`;

const NavLink = ({ name, ...rest }) => (
  <Link {...rest}>
    <Text size={20} white>
      {name}
    </Text>
  </Link>
);

export default NavLink;
