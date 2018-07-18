import React, { PureComponent } from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import icon from "../../assets/images/hamburger.png";

export default class Hamburger extends PureComponent {
  render() {
    const { open } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={open}
        activeOpacity={0.7}
      >
        <Image source={icon} />
      </TouchableOpacity>
    );
  }
}
