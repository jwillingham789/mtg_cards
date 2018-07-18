import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { View, Text, FlatList } from "react-native";

import Spinner from "./blocks/Spinner";

const Loader = styled.View`
  padding: 10px;
`;

export default class Slider extends PureComponent {
  keyExtractor = (d, i) => i.toString();
  render() {
    const {
      onRefresh,
      hasSearched,
      loading,
      refreshing,
      containerStyle,
      ...rest
    } = this.props;
    return (
      <View style={containerStyle}>
        {loading && (
          <Loader>
            <Spinner />
          </Loader>
        )}
        {!loading && (
          <FlatList
            {...rest}
            numColumns={3}
            refreshControl={
              onRefresh ? (
                <Refresh refreshing={refreshing} onRefresh={onRefresh} />
              ) : null
            }
            keyExtractor={this.keyExtractor}
            ListEmptyComponent={
              hasSearched ? (
                <View>
                  <Text>No Results Found</Text>
                </View>
              ) : null
            }
          />
        )}
      </View>
    );
  }
}
