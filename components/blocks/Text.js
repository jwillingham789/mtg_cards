import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

import globalStyles from "../../globalStyles";

const BaseText = styled.Text`
  font-family: ${globalStyles.font};
  color: ${p => {
    if (p.color) return p.color;
    else if (p.white) return "#FFF";
    return globalStyles.black;
  }};
  font-size: ${p => p.size || 14}px;
`;

export default BaseText;
