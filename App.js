import { StatusBar } from 'expo-status-bar';
import { Provider } from 'mobx-react';
import React, { useEffect } from 'react';
import { View, SafeAreaView, Platform, Text, Image, StyleSheet, Button } from 'react-native';
import { styles as webStyles } from './src/styles/web/App'
import { styles as mobileStyles } from './src/styles/mobile/App'
import NavigationStore from './src/stores/NavigationStore'
import Navigation from './src/components/Navigation';
import UserStore from './src/stores/UserStore'
import InputsStore from './src/stores/InputsStore';
import AsyncStorage from '@react-native-community/async-storage';
import { Feeds } from './src/components/Feeds';
import { FloatingAction } from "react-native-floating-action";
import MyDatePicker from './src/components/subComponent/MyDatePicker';
import ProfilePage from './src/components/ProfilePage';

// import DatePicker from './src/components/subComponent/customDateTimePicker'
// const styles = (Platform.OS === "web") ? webStyles : mobileStyles
const styles = mobileStyles
const navigator = new NavigationStore('welcome')
const user = new UserStore()
const inputsStore = new InputsStore()

const isUserSaved = async () => {
  AsyncStorage.getItem('userId').then(async (userId) => {
    if (userId !== "null" && userId) {
      const res = await user.get_user_by_id(userId)
    } else {
      setTimeout(
        () => navigator.redirect('signIn')
        , 1000)
    }
  })
}
const stores = { navigator, user, inputsStore }
export default function App() {
   isUserSaved()

   return(
     <Provider {...stores}>
      <View style={styles.mainContainer}>
    <SafeAreaView style={styles.container} >

      <Navigation />
  
    </SafeAreaView>
  
      </View>
    </Provider>

  )

}




