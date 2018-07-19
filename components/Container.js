import React from "react";
import styled from "styled-components/native";
import { ImageBackground, Platform } from "react-native";

import background from "../assets/images/background.jpg";

const StyledImage = styled.ImageBackground`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? "64px" : "60px"};
`;

const Container = ({ children, source, ...rest }) => {
  return (
    <StyledImage {...rest} source={source || background}>
      {children}
    </StyledImage>
  );
};

export default Container;
