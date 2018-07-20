import React, { Component } from "react";
import { StyleSheet, Platform, Picker } from "react-native";

import SlideModal from "./blocks/SlideModal";
import Text from "./blocks/Text";

import globalStyles from "../globalStyles";

export default class Picklist extends Component {
  render() {
    const {
      open,
      close,
      value,
      onValueChange,
      items,
      transparent
    } = this.props;
    if (Platform.OS === "ios")
      return (
        <SlideModal open={open} close={close}>
          <Picker
            selectedValue={value}
            onValueChange={onValueChange}
            itemStyle={styles.itemStyle}
          >
            {items.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>
        </SlideModal>
      );
    return (
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        style={styles.androidPicker}
      >
        {items.map((i, index) => (
          <Picker.Item key={index} label={i.label} value={i.value} />
        ))}
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  androidPicker: {
    position: "absolute",
    right: 0,
    top: 0,
    height: 45,
    width: 84,
    backgroundColor: "transparent",
    color: "transparent"
  }
});
