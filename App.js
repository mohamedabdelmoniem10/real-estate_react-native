import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import WelcomeScreen from './App/screens/WelcomeScreen';
import LoginScreen from './App/screens/LoginScreen';


export default function App() {
  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  
});
