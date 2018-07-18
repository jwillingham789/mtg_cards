import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

// import { logout } from "../../store/actions/user";
// import { store } from "../../App";

// import NavLink from "../../components/NavLink";
// import Text from "../../components/blocks/Text";

export default class DrawerMenu extends Component {
  render() {
    const { items, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text bold size={18} white style={styles.navHeader}>
          Jake
        </Text>
        {/* <View style={styles.navStats}>
          <Text bold white style={styles.navStat}>
            10
          </Text>
          <Text light white style={styles.navStatLabel}>
            Organizations
          </Text>
          <Text bold white style={styles.navStat}>
            30
          </Text>
          <Text light white style={styles.navStatLabel}>
            Channels
          </Text>
        </View>
        <View style={styles.navLine} />
        <Text bold size={18} white style={styles.navHeader}>
          Navigation
        </Text>
        <NavLink
          name="Home"
          onPress={() => navigation.navigate({ routeName: "HomeStack" })}
        /> */}
      </View>
    );
  }
}
