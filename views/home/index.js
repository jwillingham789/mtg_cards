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
import Picklist from "../../components/Picklist";

import styles from "./styles";

const filters = [
  { label: "Name", value: "name" },
  { label: "Type", value: "type" },
  { label: "Set", value: "setName" }
];

class Home extends Component {
  static navigationOptions = {
    title: "Search"
  };
  constructor() {
    super();
    this.state = {
      search: "",
      open: false,
      filter: filters[0],
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
    const { search, open, filter } = this.state;
    return (
      <Container>
        <Input
          containerStyle={styles.inputContainer}
          placeholder={"Search..."}
          value={search}
          onChangeText={this._updateSearch}
          onClear={this._updateSearch}
          filters
          onPress={this._open}
          filterText={filter.label}
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
        <Picklist
          open={open}
          close={this._close}
          items={filters}
          value={filter.value}
          onValueChange={this._setFilter}
        />
      </Container>
    );
  }
  _open = () => this.setState({ open: true });
  _close = () => this.setState({ open: false });
  _setFilter = value => {
    this.setState({ filter: filters.find(f => f.value === value) }, () => {
      if (this.state.search) this._search(this.state.search);
    });
  };
  _updateSearch = text => {
    const { fetchData } = this.state;
    this.setState({ search: text });
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
    const { filter, search } = this.state;
    const params = {
      page: page + 1,
      [filter.value]: search
    };
    asyncPaginate(dispatch(getAllCards(params)));
  };
  _onRefresh = () => {
    const { asyncRefresh, dispatch } = this.props;
    const { filter, search } = this.state;
    const params = {
      page: 1,
      [filter.value]: search
    };
    asyncRefresh(dispatch(getAllCards(params)));
  };
  _search = (text, page = 1) => {
    const { asyncLoad, dispatch } = this.props;
    const { filter } = this.state;
    let params = {
      page,
      [filter.value]: text
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
