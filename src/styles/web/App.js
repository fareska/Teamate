import { Platform, StyleSheet, Dimensions } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary } = colors

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        height:'100%', 
        paddingTop: Platform.OS === "android" ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir-Light",
    },
    mainContainer:{
        flex: 1,
        width: "100%",
        height:'100%', 
        paddingTop: Platform.OS === "android" ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',

    },
 
    dismissKeyboard:{
        position: 'absolute',
        width:'100%',
        height:'100%',
    }, 
    header:{
        flex:1, 
        width: '100%',
        height: windowHeight * 0.25,     
        position:'absolute',
        justifyContent: 'flex-end', 
        top: 0,   
        backgroundColor: primary,
        padding: 20,
        zIndex: 99,
  
    },
    headerTitle:{
        fontSize: 40,
        textAlign: 'left', 
        fontWeight: '900',
        color: 'white',  

    },
 
});

export { styles }