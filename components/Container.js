import React from "react";
import styled from "styled-components/native";
import { ImageBackground, Platform } from "react-native";

import globalStyles from "../globalStyles";

import background from "../assets/images/background.jpg";

const StyledImage = styled.ImageBackground`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? "64px" : "60px"};
  height: ${globalStyles.height};
`;

const Container = ({ children, ...rest }) => {
  return (
    <StyledImage {...rest} source={background}>
      {children}
    </StyledImage>
  );
};

export default Container;
