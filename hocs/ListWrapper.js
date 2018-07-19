import React, { Component } from "react";

const ListWrapper = WrappedComponent => {
  class Wrapper extends Component {
    constructor() {
      super();
      this.state = {
        loading: false,
        refreshing: false,
        paginating: false
      };
    }
    asyncLoad = async action => {
      this.setState({ loading: true });
      await action;
      this.setState({ loading: false });
    };
    asyncRefresh = async action => {
      this.setState({ refreshing: true });
      await action;
      this.setState({ refreshing: false });
    };
    asyncPaginate = async action => {
      this.setState({ paginating: true });
      await action;
      this.setState({ paginating: false });
    };
    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          asyncLoad={this.asyncLoad}
          asyncRefresh={this.asyncRefresh}
          asyncPaginate={this.asyncPaginate}
        />
      );
    }
  }
  Wrapper.navigationOptions = WrappedComponent.navigationOptions;
  return Wrapper;
};

export default ListWrapper;
