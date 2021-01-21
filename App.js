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
import UserStore from './src/stores/UserStore'
import InputsStore from './src/stores/InputsStore';
// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles
const navigator = new NavigationStore('signIn') 
const user = new UserStore()
const inputsStore = new InputsStore()


const stores = { navigator, user, inputsStore }
export default function App() {
 
  return (
    <Provider {...stores}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.container} >
 
          <Navigation />

        </SafeAreaView>
      </View>
    </Provider>
  );
}


