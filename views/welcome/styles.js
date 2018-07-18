import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

const width = globalStyles.width * 0.8;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  title: {
    marginTop: 50,
    fontSize: 20,
    color: "#FFF"
  },
  logo: {
    width: width,
    height: width * 0.25
  }
});
