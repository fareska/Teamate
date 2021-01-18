import { StatusBar } from 'expo-status-bar';
import { Provider } from 'mobx-react';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Platform } from 'react-native';
import {styles as webStyles} from './src/styles/webStyles'
import {styles as mobileStyles} from './src/styles/mobileStyles'
const styles = (Platform.OS==="web")? webStyles: mobileStyles



export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
    <Text>Hello world!</Text>
      </SafeAreaView>
    </View>
  );
}


