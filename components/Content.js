import React, { Component } from "react";
import styled from "styled-components/native";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import Refresh from "./blocks/Refresh";
import Spinner from "./blocks/Spinner";

import globalStyles from "../globalStyles";

const ios = Platform.OS === "ios";

const Scroll = styled.ScrollView`
  flex: 1;
`;

class AvoidKeyboard extends Component {
  render() {
    const { children, keyboardShift } = this.props;
    if (keyboardShift && ios) {
      return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
          {children}
        </KeyboardAvoidingView>
      );
    }
    return children;
  }
}

const Content = ({
  loading,
  refresh,
  refreshing,
  onRefresh,
  keyboardShift,
  children,
  ...rest
}) => {
  const render = loading ? <Spinner /> : children;
  const ScrollComponent = refresh ? (
    <Scroll
      {...rest}
      refreshControl={<Refresh refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {render}
    </Scroll>
  ) : (
    <Scroll {...rest}>{render}</Scroll>
  );
  return (
    <AvoidKeyboard keyboardShift={keyboardShift}>
      {ScrollComponent}
    </AvoidKeyboard>
  );
};

export default Content;
