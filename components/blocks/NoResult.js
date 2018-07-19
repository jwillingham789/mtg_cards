import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 55px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
`;
const RedBorder = styled.View`
  width: 5px;
  height: 55px;
  margin-right: 10px;
  background-color: red;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export default class NoResult extends PureComponent {
  render() {
    return (
      <Container {...this.props}>
        <RedBorder />
        <View>
          <Text>No Results Found</Text>
        </View>
      </Container>
    );
  }
}
