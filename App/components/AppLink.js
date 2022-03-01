import * as React from "react";
import { Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

export default function AppLink({ children, onPress, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[styles.link, style]}>{children}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#1e8e38",
    fontSize: 16,
    fontWeight: "700",
    textDecorationColor: "#1e8e38",
    textDecorationLine: "underline",
    textTransform: "capitalize",
  },
});
