//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";

import { Formik } from "formik";

import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import AppLink from "../components/AppLink";
import colors from "../config/colors";

// create a component
const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log("form values", values)}
    >
      {({ handleChange, handleSubmit }) => (
        <>
          <AppInput
            label="email"
            placeholder="Your Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={handleChange("email")}
          />
          <AppInput
            label="password"
            password
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            placeholder="Your password"
            onChangeText={handleChange("password")}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
            }}
          >
            <AppLink
              style={styles.link}
              onPress={() => console.log("link clicked")}
            >
              forget password?
            </AppLink>
          </View>
          <AppButton
            green
            label="login"
            style={{ marginVertical: 45 }}
            onPress={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
};

// define your styles
const styles = StyleSheet.create({
  link: {
    color: colors.black,
    textDecorationLine: "none",
  },
});

//make this component available to the app
export default LoginForm;
