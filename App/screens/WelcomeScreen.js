import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Screen from './Screen';
import AppButton from '../components/AppButton';
import AppLink from '../components/AppLink';
import GreenHeading from '../components/GreenHeading'

import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/search.png')} style={styles.image} />
      <GreenHeading label="welcome" />
      <Text style={styles.paragraph}>
        Wo Help You Find Best Appartment in Your Location.
      </Text>
      <View style={{width: '90%', marginVertical: 30}}>
        <AppButton green label="log in" onPress={()=> console.log('login')} />
        <AppButton label="sign up" onPress={()=> console.log('sign up')} />
      </View>
      <AppLink onPress={()=> console.log('link clicked')}>Gest User</AppLink>
    </Screen>
  );
}

const { bodyTxt, green } = colors;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '30%',
    marginVertical: 20,

    elevation: 3,
    shadowColor: green,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: .2,
  },
  paragraph: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 30,
    textAlign: 'center',
    color: bodyTxt,
    width: '90%'
  }
});
