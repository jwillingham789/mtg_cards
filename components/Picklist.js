import React, { Component } from "react";
import { StyleSheet, Platform, Picker } from "react-native";

import SlideModal from "./blocks/SlideModal";

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
        style={[
          size,
          styles.androidPicker,
          { color: transparent ? "#fff" : "#000" }
        ]}
      >
        {items.map((i, index) => (
          <Picker.Item key={index} label={i.label} value={i.value} />
        ))}
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#fff"
  },
  androidPicker: {
    width: "100%",
    backgroundColor: "transparent"
  }
});
