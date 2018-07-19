import React, { Component } from "react";
import { ScrollView, View } from "react-native";

import Container from "../../components/Container";
import Card from "../../components/Card";
import Table from "../../components/Table";

import styles from "./styles";
import island from "../../assets/images/island.jpg";

export default class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.card.name
  });
  render() {
    const { navigation } = this.props;
    const card = navigation.state.params.card;
    return (
      <Container source={island} style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Card
              image={card.imageUrl}
              value={card.name}
              columns={1.2}
              style={styles.card}
            />
            <Table rulings={card.rulings} style={styles.table} />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
