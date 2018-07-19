import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { Modal, TouchableOpacity, View } from "react-native";

import Card from "./Card";

import icon from "../assets/images/close.png";

const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
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
const Close = styled.Image`
  height: 20px;
  width: 20px;
`;
const StyledCard = styled(Card)`
  margin-right: 0px;
  margin-bottom: 0px;
`;

export default class ImageOverlay extends PureComponent {
  render() {
    const { open, close, image, ...rest } = this.props;
    return (
      <Modal {...rest} visible={open} onRequestClose={close} transparent>
        <Container>
          <CloseButton onPress={close} activeOpacity={0.7}>
            <Close source={icon} />
          </CloseButton>
          <StyledCard image={image} columns={1.1} />
        </Container>
      </Modal>
    );
  }
}
