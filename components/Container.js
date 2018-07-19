import React from "react";
import styled from "styled-components/native";
import { ImageBackground } from "react-native";

import globalStyles from "../globalStyles";

import background from "../assets/images/background.jpg";

const StyledImage = styled.ImageBackground`
  flex: 1;
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
