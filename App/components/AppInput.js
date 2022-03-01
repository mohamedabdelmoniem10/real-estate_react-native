import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function AppInput({ label, password, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        <TextInput
          style={[styles.input]}
          secureTextEntry={password}
          {...otherProps}
        />
      </View>
    </View>
  );
}

const { black, grey } = colors;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  label: {
    color: black,
    fontSize: 16,
    textTransform: "capitalize",
  },
  field: {
    borderBottomWidth: 3,
    borderBottomColor: grey,
    marginVertical: 15,
    paddingBottom: 5,
  },
  input: {
    fontSize: 18,
  },
});
