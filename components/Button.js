import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import Spinner from "./blocks/Spinner";
import Text from "./blocks/Text";

import globalStyles from "../globalStyles";

const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45;
  border-radius: 4px;
  background-color: ${globalStyles.orange};
`;
const Label = styled(Text)`
  font-size: 20px;
  color: #fff;
`;

const Button = ({ text, loading, ...rest }) => (
  <StyledButton {...rest} disabled={loading} activeOpacity={0.8}>
    {loading ? <Spinner /> : <Label pointerEvents={"none"}>{text}</Label>}
  </StyledButton>
);

export default Button;
