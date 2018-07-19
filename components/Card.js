import React, { Component } from "react";
import styled from "styled-components/native";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Animated,
  ActivityIndicator
} from "react-native";
// import ImageOverlay from "./ImageOverlay";

import globalStyles from "../globalStyles";

import placeholder from "../assets/images/placeholder.jpg";

const Container = styled.TouchableOpacity`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  elevation: 1;
`;
const ImageContainer = styled.View`
  background-color: #fff;
  border-radius: 5px;
  shadow-offset: 1px 5px;
  shadow-radius: 5px;
  shadow-color: #000;
`;
const AnimatedImageContainer = Animated.createAnimatedComponent(ImageContainer);
const FadeBox = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background-color: #000;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const AnimatedFade = Animated.createAnimatedComponent(FadeBox);
const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const anim = {
  speed: 70,
  bounciness: 2
};

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.fadeValue = new Animated.Value(0);
    this.cardValue = new Animated.Value(0);
    this.opacityValue = new Animated.Value(0);
    this.fade = this.fadeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });
    this.scale = this.cardValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.9]
    });
    this.opacity = this.opacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });
  }
  fadeIn = () => {
    Animated.timing(this.fadeValue, {
      toValue: 1
    }).start();
  };
  clickStart = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(this.opacityValue, {
          ...anim,
          toValue: 1
        }),
        Animated.spring(this.cardValue, {
          ...anim,
          toValue: 1
        })
      ])
    ]).start();
  };
  clickEnd = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(this.cardValue, {
          toValue: 0
        }),
        Animated.spring(this.opacityValue, {
          toValue: 0
        })
      ])
    ]).start();
  };
  onPress = () => {
    const { expand, onPress } = this.props;
    if (expand) this.setState({ expanded: true });
    else if (onPress) setTimeout(this.clickHandler, 200);
  };
  clickHandler = () => {
    const { onPress, data, index } = this.props;
    onPress(data, index);
  };
  render() {
    const {
      columns,
      image,
      number,
      value,
      subvalue,
      volume,
      grid,
      onPress,
      ...rest
    } = this.props;
    const newWidth = globalStyles.width / columns - 14;
    const newHeight = newWidth * 1.4;
    const source = image ? { uri: image } : placeholder;
    return (
      <Container
        {...rest}
        grid={grid}
        width={newWidth}
        height={newHeight}
        disabled={!onPress}
        onPressIn={this.clickStart}
        onPress={this.onPress}
        onPressOut={this.clickEnd}
        activeOpacity={1}
      >
        <AnimatedFade
          style={{ opacity: this.fade }}
          width={newWidth}
          height={newHeight}
        >
          <ActivityIndicator size="small" color="#FFF" />
        </AnimatedFade>
        <AnimatedImageContainer
          style={[
            { transform: [{ scale: this.scale }] },
            { shadowOpacity: this.opacity }
          ]}
        >
          <CardImage
            width={newWidth}
            height={newHeight}
            source={source}
            resizeMode="cover"
            onLoadEnd={this.fadeIn}
          />
        </AnimatedImageContainer>
        {/* {this.state.expanded && (
          <ImageOverlay
            source={source}
            open={this.state.expanded}
            close={() => this.setState({ expanded: false })}
          />
        )} */}
      </Container>
    );
  }
}
