import * as React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function GreenHeading({ label, style }) {
  return <Text style={[styles.heading, style]}>{label}</Text>;
}

const { green } = colors;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: green,
    marginVertical: 20,
    textTransform: "capitalize",
  },
});
