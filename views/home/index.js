import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { getCards } from "../../store/actions/cards";

import styles from "./styles";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View>
        <Text>Home Page</Text>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { cards } = state;
  return {
    cards
  };
}

export default connect(mapStateToProps)(Home);
