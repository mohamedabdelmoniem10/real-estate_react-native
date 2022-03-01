import * as React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

export default function AppButton({ green, label, style, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          style,
          { backgroundColor: green ? "#1e8e38" : "#d6d6d6" },
        ]}
      >
        <Text style={[styles.label, { color: green ? "#fff" : "#000" }]}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 15,
    marginVertical: 12,
  },
  label: {
    fontSize: 17,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
