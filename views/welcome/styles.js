import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

const width = globalStyles.width * 0.9;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: width,
    height: width * 0.25
  },
  button: {
    marginTop: 30,
    width: "90%"
  }
});
