import React, { Component, PureComponent } from "react";
import styled from "styled-components/native";
import { View, FlatList } from "react-native";

import Text from "../components/blocks/Text";

import globalStyles from "../globalStyles";

const Container = styled.View`
  width: 100%;
  background-color: transparent;
`;
const Header = styled.View`
  width: 100%;
  padding: 6px 8px;
  background-color: ${globalStyles.black};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${globalStyles.gray};
  border-width: 0.5px;
  border-bottom-width: 0.5px;
  border-color: #ccc;
  border-bottom-left-radius: ${p => (p.last ? "5px" : "0px")};
  border-bottom-right-radius: ${p => (p.last ? "5px" : "0px")};
`;
const Left = styled.View`
  width: 80px;
  justify-content: center;
  align-items: flex-end;
  margin-top: 6px;
  padding-right: 6px;
  border-bottom-left-radius: ${p => (p.last ? "5px" : "0px")};
  border-bottom-right-radius: ${p => (p.last ? "5px" : "0px")};
`;
const Right = styled.View`
  padding: 6px 8px;
  background-color: #fff;
  justify-content: center;
  flex: 1;
  border-bottom-left-radius: ${p => (p.last ? "5px" : "0px")};
  border-bottom-right-radius: ${p => (p.last ? "5px" : "0px")};
`;

class TableRow extends PureComponent {
  render() {
    const { date, text, last } = this.props;
    return (
      <Row last={last}>
        {date && (
          <Left last={last}>
            <Text size={11}>{date}</Text>
          </Left>
        )}
        <Right last={last}>
          <Text size={11}>{text}</Text>
        </Right>
      </Row>
    );
  }
}

class Table extends Component {
  renderItem = (item, i) => {
    const { rulings } = this.props;
    const last = i + 1 === rulings.length;
    return <TableRow key={i} date={item.date} text={item.text} last={last} />;
  };
  render() {
    const { rulings, ...rest } = this.props;
    return (
      <Container {...rest}>
        <Header>
          <Text white size={18}>
            RULINGS
          </Text>
        </Header>
        {rulings ? (
          rulings.map(this.renderItem)
        ) : (
          <TableRow text={"No Rulings"} last />
        )}
      </Container>
    );
  }
}

export default Table;
