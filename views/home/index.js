import React, { Component } from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";

import { getAllCards } from "../../store/actions/cards";

import ListWrapper from "../../hocs/ListWrapper";
import Container from "../../components/Container";
import Content from "../../components/Content";
import Input from "../../components/Input";
import Slider from "../../components/Slider";
import Card from "../../components/Card";

import styles from "./styles";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor() {
    super();
    this.state = {
      search: "",
      fetchData: debounce(this._search, 500)
    };
  }
  componentDidMount() {
    this._search("");
  }
  render() {
    const {
      allCards,
      loading,
      refreshing,
      paginating,
      totalCount
    } = this.props;
    const { search } = this.state;
    return (
      <Container>
        <Input
          containerStyle={styles.inputContainer}
          placeholder={"Search..."}
          value={search}
          onChangeText={this._updateSearch}
          onClear={this._updateSearch}
        />
        <Content>
          <Slider
            data={allCards}
            renderItem={this._renderItem}
            loading={loading}
            refreshing={refreshing}
            onRefresh={this._onRefresh}
            onFetchMore={this._fetchMore}
            disableFetchMore={paginating}
            doneFetching={allCards.length == totalCount}
          />
        </Content>
      </Container>
    );
  }
  _updateSearch = text => {
    const { fetchData } = this.state;
    this.setState({ search: text || "" });
    fetchData(text);
  };
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
    asyncRefresh(dispatch(getAllCards({ page: 1 })));
  };
  _search = text => {
    const { asyncLoad, dispatch, page } = this.props;
    let params = {
      page,
      name: text
    };
    if (!text) params = { ...params, random: true };
    asyncLoad(dispatch(getAllCards(params)));
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
