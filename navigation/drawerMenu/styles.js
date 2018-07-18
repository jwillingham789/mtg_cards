import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.blue,
    paddingVertical: 40
  },
  navHeader: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20
  },
  navLine: {
    height: 1,
    backgroundColor: "#fff",
    width: "100%"
  },
  navStats: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  navStat: {
    marginRight: 8
  },
  navStatLabel: {
    marginRight: 8
  }
});
