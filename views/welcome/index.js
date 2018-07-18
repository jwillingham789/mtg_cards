import React, { PureComponent } from "react";
import { View, Text } from "react-native";

// import Container from "../../components/Container";
// import Button from "../../components/Button";
// import Text from "../../components/blocks/Text";

import globalStyles from "../../globalStyles";
import styles from "./styles";

export default class Welcome extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Welcome to MTG Cards</Text>
      </View>
    );
  }
}
