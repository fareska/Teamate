import { Platform, StyleSheet } from 'react-native'
import { colors } from './COLORS'
const { primary, secondary } = colors

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        paddingTop: Platform.OS === "android" ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir-Light"
    },

    signIn: {
        flex: 1,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor:primary
    },
    
    logoContainer: {
        flex: 1,
     
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontSize: 40,
        textAlign: 'center'
    },
    
    titleContainer: {
        flex: 1,
        width: "100%"
    },
    
    signInInputsContainer: {
        flex: 1,
        width: "100%"
    },
    signInBtnContainer:{
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:secondary
    },

    signInBtn: {
        width:"80%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:primary
    },
    
    
    
});




export { styles }