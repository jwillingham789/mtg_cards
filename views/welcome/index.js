import React, { PureComponent } from "react";
import { View, Image } from "react-native";

import Container from "../../components/Container";
import Button from "../../components/Button";

import styles from "./styles";

import logo from "../../assets/images/logo.png";
import plains from "../../assets/images/plains.jpg";

export default class Welcome extends PureComponent {
  render() {
    return (
      <Container source={plains} style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Button
          text="Let's Search!"
          onPress={this._navigateToHome}
          style={styles.button}
        />
      </Container>
    );
  }
  _navigateToHome = () =>
    this.props.navigation.navigate({ routeName: "MainStack" });
}
