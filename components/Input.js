import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { TextInput, View } from "react-native";

import globalStyles from "../globalStyles";

const Input = styled.TextInput`
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  border-radius: 2px;
  font-size: 14px;
  color: ${globalStyles.black};
  width: 100%;
`;

export default class StyledInput extends PureComponent {
  render() {
    const { containerStyle, ...rest } = this.props;
    return (
      <View style={containerStyle}>
        <Input {...rest} />
      </View>
    );
  }
}
