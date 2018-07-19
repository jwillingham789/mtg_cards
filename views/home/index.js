import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { getAllCards } from "../../store/actions/cards";

import ListWrapper from "../../hocs/ListWrapper";
import Container from "../../components/Container";
import Content from "../../components/Content";
import Slider from "../../components/Slider";
import Card from "../../components/Card";

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
    const {
      allCards,
      loading,
      refreshing,
      paginating,
      totalCount
    } = this.props;
    return (
      <Container>
        <Content>
          <Slider
            data={allCards}
            renderItem={this._renderItem}
            loading={loading}
            refreshing={refreshing}
            onRefresh={this._onRefresh}
            onFetchMore={this._fetchMore}
            disableFetchMore={paginating}
            doneFetching={allCards.length === totalCount}
          />
        </Content>
      </Container>
    );
  }
  _renderItem = ({ item }) => (
    <Card
      grid
      image={item.imageUrl}
      value={item.name}
      columns={3}
      onPress={() => {}}
    />
  );
  _fetchMore = () => {
    const { asyncPaginate, dispatch, page } = this.props;
    asyncPaginate(dispatch(getAllCards({ page: page + 1 })));
  };
  _onRefresh = () => {
    const { asyncRefresh, dispatch } = this.props;
    asyncRefresh(dispatch(getAllCards()));
  };
}

const mapStateToProps = state => {
  const { cards } = state;
  return {
    allCards: cards.allCards,
    totalCount: cards.totalCount,
    page: cards.page
  };
};

export default connect(mapStateToProps)(ListWrapper(Home));
