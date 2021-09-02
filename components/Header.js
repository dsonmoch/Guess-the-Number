import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 30,
    backgroundColor: Platform.OS == "android" ? colors.primaryDark : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === "android" ? "white" : "black",
  },
});

export default Header;
