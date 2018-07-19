import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { Modal, TouchableOpacity, View, Image, Text } from "react-native";

import placeholder from "../assets/images/placeholder.jpg";
import icon from "../assets/images/close.png";

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 100;
  elevation: 100;
`;
const ScaledImage = styled.Image`
  flex: 1;
  align-self: stretch;
  width: undefined;
  height: undefined;
`;
const Close = styled.Image`
  height: 20px;
  width: 20px;
`;

export default class ImageOverlay extends PureComponent {
  render() {
    const { open, close, image, ...rest } = this.props;
    const source = image ? { uri: image } : placeholder;
    return (
      <Modal
        {...rest}
        visible={open}
        onRequestClose={close}
        animationType="slide"
      >
        <Container>
          <CloseButton onPress={close} activeOpacity={0.7}>
            <Close source={icon} />
          </CloseButton>
          <ScaledImage source={source} resizeMode="contain" />
        </Container>
      </Modal>
    );
  }
}
