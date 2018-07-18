import React, { Component } from "react";

const ListWrapper = WrappedComponent => {
  class Wrapper extends Component {
    constructor() {
      super();
      this.state = {
        loading: false,
        refreshing: false
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
    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          asyncLoad={this.asyncLoad}
          asyncRefresh={this.asyncRefresh}
        />
      );
    }
  }
  Wrapper.navigationOptions = WrappedComponent.navigationOptions;
  return Wrapper;
};

export default ListWrapper;
