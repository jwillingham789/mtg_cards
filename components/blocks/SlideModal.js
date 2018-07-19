import React, { Component } from "react";
import { Modal, View, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
const ModalContainer = styled.View`
  background-color: #fff;
  shadow-offset: 0px -2px;
  shadow-radius: 6px;
  shadow-color: #000;
  shadow-opacity: 1;
`;

const SlideModal = ({ open, close, children, ...rest }) => (
  <Modal
    animationType="slide"
    transparent
    visible={open}
    onRequestClose={() => {}}
  >
    <TouchableWithoutFeedback onPress={close}>
      <Container>
        <ModalContainer {...rest}>{children}</ModalContainer>
      </Container>
    </TouchableWithoutFeedback>
  </Modal>
);

export default SlideModal;
