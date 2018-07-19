import React, { Component } from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";

import { getAllCards } from "../../store/actions/cards";

import ListWrapper from "../../hocs/ListWrapper";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Slider from "../../components/Slider";
import Card from "../../components/Card";

import ImageOverlay from "../../components/ImageOverlay";

import styles from "./styles";

const filters = [
  { label: "Name", value: "name", placeholder: "thalia, swamp, etc." },
  { label: "Type", value: "type", placeholder: "creature, land, etc." },
  { label: "Set", value: "setName", placeholder: "tenth, mirrodin, etc." },
  { label: "Color", value: "colors", placeholder: "blue, red, etc." },
  {
    label: "Supertype",
    value: "supertypes",
    placeholder: "legendary, snow, etc."
  },
  { label: "Subtype", value: "subtypes", placeholder: "human, aura, etc." },
  { label: "Rarity", value: "rarity", placeholder: "basic, rare, etc.." }
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
      active: {},
      imageOpen: false,
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
    const { search, open, filter, imageOpen, active } = this.state;
    return (
      <Container>
        <Input
          containerStyle={styles.inputContainer}
          placeholder={filter.placeholder}
          value={search}
          onChangeText={this._updateSearch}
          onClear={this._updateSearch}
          onPress={this._open}
          filterText={filter.label}
          items={filters}
          pickerValue={filter.value}
          onValueChange={this._setFilter}
          open={open}
          close={this._close}
        />
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
        <ImageOverlay
          open={imageOpen}
          close={this._closeImage}
          image={active.imageUrl}
        />
      </Container>
    );
  }
  _open = () => this.setState({ open: true });
  _close = () => this.setState({ open: false });
  _closeImage = () => this.setState({ imageOpen: false });
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
  _renderItem = ({ item, index }) => (
    <Card
      data={item}
      index={index}
      grid
      image={item.imageUrl}
      value={item.name}
      columns={3}
      onPress={this._navigateToDetails}
      onLongPress={this._selectCard}
    />
  );
  _navigateToDetails = item => {
    const { navigation } = this.props;
    navigation.navigate({ routeName: "Details", params: { card: item } });
  };
  _selectCard = (item, index) => {
    this.setState({
      imageOpen: true,
      active: item
    });
  };
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
    let params = {
      page: 1,
      [filter.value]: search
    };
    if (!search) params = { ...params, random: true };
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
