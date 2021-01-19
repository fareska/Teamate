import { StatusBar } from 'expo-status-bar';
import { Provider } from 'mobx-react';
import React from 'react';
import {
  StyleSheet, Text, View, Button,
  Keyboard, SafeAreaView, ScrollView,
  Platform, TouchableWithoutFeedback,
  GestureResponderEvent
} from 'react-native';
import { styles as webStyles } from './src/styles/web/App'
import { styles as mobileStyles } from './src/styles/mobile/App'
import NavigationStore from './src/stores/NavigationStore'
import Navigation from './src/components/Navigation';
// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles
const navigator = new NavigationStore('welcome')



const stores = { navigator }
export default function App() {
 
  return (
    <Provider {...stores}>
      <View style={styles.container}>
        <SafeAreaView style={styles.container} >
 
          <Navigation />

        </SafeAreaView>
      </View>
    </Provider>
  );
}


