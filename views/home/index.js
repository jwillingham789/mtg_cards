import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { getAllCards } from "../../store/actions/cards";

import ListWrapper from "../../hocs/ListWrapper";
import Slider from "../../components/Slider";

import styles from "./styles";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  componentDidMount() {
    const { asyncLoad, dispatch } = this.props;
    asyncLoad(dispatch(getAllCards()));
  }
  render() {
    const { allCards, loading, refreshing } = this.props;
    return (
      <View>
        <Slider
          data={allCards}
          renderItem={this._renderItem}
          loading={loading}
          refreshing={refreshing}
        />
      </View>
    );
  }
  _renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };
}

const mapStateToProps = state => {
  const { cards } = state;
  return {
    allCards: cards.allCards
  };
};

export default connect(mapStateToProps)(ListWrapper(Home));
