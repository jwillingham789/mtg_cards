import React, { PureComponent } from "react";
import { View, Image } from "react-native";

import Container from "../../components/Container";
import Button from "../../components/Button";

import globalStyles from "../../globalStyles";
import styles from "./styles";

import logo from "../../assets/images/logo.png";
import swamp from "../../assets/images/swamp.jpg";

export default class Welcome extends PureComponent {
  render() {
    return (
      <Container source={swamp} style={styles.container}>
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
