import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { TextInput, View, TouchableOpacity } from "react-native";

import Text from "./blocks/Text";
import Picklist from "./Picklist";

import globalStyles from "../globalStyles";

const Container = styled.View`
  width: 100%;
  border-radius: 2px;
`;
const Inner = styled.View`
  height: 45px;
  border-radius: 2px;
  flex-direction: row;
  position: relative;
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
  width: 100px;
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
      filterText,
      open,
      close,
      items,
      pickerValue,
      onValueChange,
      ...rest
    } = this.props;
    return (
      <Container style={containerStyle}>
        <Inner>
          <Input
            {...rest}
            underlineColorAndroid="transparent"
            autoCapitalize={"none"}
            autoCorrect={false}
            clearButtonMode="while-editing"
          />
          {items && (
            <Filters onPress={onPress} activeOpacity={0.7}>
              <Text size={16} white>
                {filterText.toUpperCase()}
              </Text>
            </Filters>
          )}
          <Picklist
            open={open}
            close={close}
            items={items}
            value={pickerValue}
            onValueChange={onValueChange}
          />
        </Inner>
      </Container>
    );
  }
}
