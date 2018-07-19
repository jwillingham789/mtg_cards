import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

import Spinner from "./blocks/Spinner";

import globalStyles from "../globalStyles";

const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45;
  border-radius: 1px;
  background-color: ${globalStyles.orange};
`;
const Label = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const Button = ({ text, loading, ...rest }) => (
  <StyledButton {...rest} disabled={loading} activeOpacity={0.7}>
    {loading ? <Spinner /> : <Label pointerEvents={"none"}>{text}</Label>}
  </StyledButton>
);

export default Button;
