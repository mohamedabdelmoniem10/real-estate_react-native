import * as React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function SecTitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const { black } = colors;
const styles = StyleSheet.create({
  title: {
    fontSize: 27,
    fontWeight: "500",
    color: black,
    textTransform: "capitalize",
  },
});
