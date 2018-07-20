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
  border-radius: 4px;
  background-color: ${globalStyles.black};
`;
const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const Button = ({ text, loading, ...rest }) => (
  <StyledButton {...rest} disabled={loading} activeOpacity={0.8}>
    {loading ? <Spinner /> : <Label pointerEvents={"none"}>{text}</Label>}
  </StyledButton>
);

export default Button;
