import React, { Component } from "react";
import { View, Image } from "react-native";

import styles from "./styles";

import NavLink from "../../components/blocks/NavLink";

import logo from "../../assets/images/logo.png";

export default class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <NavLink name="Welcome" onPress={this._linkToWelcome} />
        <NavLink name="Search" onPress={this._linkToSearch} />
      </View>
    );
  }
  _linkToWelcome = () => {
    const { navigation } = this.props;
    navigation.navigate("DrawerClose");
    navigation.navigate({ routeName: "WelcomeStack" });
  };
  _linkToSearch = () => {
    const { navigation } = this.props;
    navigation.navigate("DrawerClose");
    navigation.navigate({ routeName: "HomeStack" });
  };
}
