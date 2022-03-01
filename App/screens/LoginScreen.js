import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import Screen from "./Screen";
import GreenHeading from "../components/GreenHeading";
import SecTitle from "../components/SecTitle";
import LoginForm from "../components/LoginForm";
import SocialLoginButtons from "../components/SocialLoginButtons";

import SimpleTxt from "../components/SimpleTxt";
import AppLink from "../components/AppLink";

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <GreenHeading style={{ marginVertical: 0 }} label="welcome" />
        <SecTitle title="log in" />
      </View>
      <LoginForm />
      <SimpleTxt>or log in using social media</SimpleTxt>
      <SocialLoginButtons />
      <AppLink onPress={() => console.log("link clicked")}>Gest User</AppLink>
      <View style={{ height: 20 }} />
      <SimpleTxt>
        Don't have an Account?
        <AppLink onPress={() => console.log("link clicked")}> sign up</AppLink>
      </SimpleTxt>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: "7%",
    paddingLeft: "7%",
  },
  header: {
    width: "100%",
    marginVertical: 30,
  },
});
