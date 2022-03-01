//import liraries
import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

// create a component
const SimpleTxt = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

// define your styles
const styles = StyleSheet.create({
  text: {
    color: colors.bodyTxt,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});

//make this component available to the app
export default SimpleTxt;
