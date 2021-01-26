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
        flexDirection:'row',      
        justifyContent: 'space-around' ,  
        alignItems:'flex-end',    
        backgroundColor: primary,
        paddingBottom:5 , 
         height:100,  
         marginBottom:20, 
       
  
    },
    headerTitle:{
        fontSize: 50, 
        textAlign: 'left', 
        fontWeight: '900',
        color: 'white', 
        left: -25,     

    },
    backButtonTouchable:{
        width:40,
        height:40
    },
    logOutButtonTouchable:{
        width:40,
        height:40,
        alignSelf:'flex-end' 
    }
 
});

export { styles }