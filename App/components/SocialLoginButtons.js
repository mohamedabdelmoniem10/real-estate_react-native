//import liraries
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

import colors from "../config/colors";

// create a component
const SocialLoginButtons = () => {
  return (
    <View style={styles.container}>
      <SocialLoginBtn
        label="facebook"
        image={require("../assets/facebook.png")}
        onPress={() => console.log("login using facebook")}
      />
      <SocialLoginBtn
        label="google"
        image={require("../assets/google.png")}
        onPress={() => console.log("login using google")}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 50,
    marginBottom: 60,
  },
  button: {
    width: "45%",
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 12,

    borderRadius: 7,
    elevation: 5,
  },
  btnImg: { width: 25, height: 25, marginHorizontal: 10 },
  btnTxt: {
    marginRight: 20,
    fontSize: 17,
  },
});

//make this component available to the app
export default SocialLoginButtons;

const SocialLoginBtn = ({ image, label, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Image style={styles.btnImg} source={image} />
        <Text style={styles.btnTxt}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
