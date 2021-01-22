import { Platform, StyleSheet, Dimensions,StatusBar } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary } = colors
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    feedsScrollable:{
        flex:1,
          width:'100%',
          minHeight: windowHeight*1.5,
          marginTop: 0,
        
        },
        feedsScrollableContainer:{
            width:'100%',
          paddingTop: windowHeight * 0.55,
          marginBottom: 200,
            alignItems:'center',
            backgroundColor: '#f8f9fa'
        },
        footer:{
            width:'100%',
            height: 300,
            alignItems:'center'


        },
        floatingContainer:{
          position:'absolute',
          width:'100%',
          height: windowHeight * 1.2
        },


});




export { styles }