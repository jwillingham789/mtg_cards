import React, { PureComponent } from "react";
import { View, Text, Button, Image } from "react-native";

import globalStyles from "../../globalStyles";
import styles from "./styles";

import logo from "../../assets/images/logo.png";

export default class Welcome extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Card Searcher</Text>
        <Button title="Search" onPress={this._navigateToHome} />
      </View>
    );
  }
  _navigateToHome = () =>
    this.props.navigation.navigate({ routeName: "MainStack" });
}
