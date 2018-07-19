import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { TextInput, View, TouchableOpacity } from "react-native";

import Text from "./blocks/Text";

import globalStyles from "../globalStyles";

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  border-radius: 2px;
`;
const Input = styled.TextInput`
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  font-size: 16px;
  font-family: ${globalStyles.font};
  color: ${globalStyles.black};
  height: 45px;
  flex: 1;
`;
const Filters = styled.TouchableOpacity`
  height: 45px;
  width: 70px;
  justify-content: center;
  align-items: center;
  background-color: ${globalStyles.orange};
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export default class StyledInput extends PureComponent {
  render() {
    const {
      containerStyle,
      onPress,
      filters,
      filterText,
      ...rest
    } = this.props;
    return (
      <Container style={containerStyle}>
        <Input {...rest} />
        {filters && (
          <Filters onPress={onPress} activeOpacity={0.7}>
            <Text size={16} white>
              {filterText.toUpperCase()}
            </Text>
          </Filters>
        )}
      </Container>
    );
  }
}
