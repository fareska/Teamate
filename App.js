import { StatusBar } from 'expo-status-bar';
import { Provider } from 'mobx-react';
import React from 'react';
import { StyleSheet, Text, View, Button,Keyboard, SafeAreaView, ScrollView, Platform, TouchableWithoutFeedback } from 'react-native';
import SignIn from './src/components/SignIn';

import { styles as webStyles } from './src/styles/webStyles'
import { styles as mobileStyles } from './src/styles/mobileStyles'
const styles = (Platform.OS === "web") ? webStyles : mobileStyles


export default function App() {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
       <SignIn/>


      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}


