import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { View, Text, FlatList } from "react-native";

import Button from "./Button";
import NoResult from "./blocks/NoResult";
import Spinner from "./blocks/Spinner";
import Refresh from "./blocks/Refresh";
import globalStyles from "../globalStyles";

const Loader = styled.View`
  padding: 10px;
`;

export default class Slider extends PureComponent {
  keyExtractor = (d, i) => i.toString();
  render() {
    const {
      onRefresh,
      loading,
      refreshing,
      containerStyle,
      onFetchMore,
      doneFetching,
      disableFetchMore,
      searched,
      ...rest
    } = this.props;
    return (
      <View style={{ paddingLeft: 10, paddingTop: 10, paddingBottom: 10 }}>
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
            ListEmptyComponent={
              <NoResult style={{ width: globalStyles.width - 20 }} />
            }
            keyExtractor={this.keyExtractor}
          />
        )}
        {onFetchMore &&
          !doneFetching &&
          !loading && (
            <Button
              style={{ width: globalStyles.width - 20, marginTop: 10 }}
              onPress={onFetchMore}
              loading={disableFetchMore}
              text={"Load More"}
            />
          )}
      </View>
    );
  }
}
