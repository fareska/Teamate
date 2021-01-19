import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary } = colors

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        height:'100%',
        paddingTop: Platform.OS === "android" ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir-Light"
    },

    dismissKeyboard:{
        position: 'absolute',
        width:'100%',
        height:'100%',

    },

});




export { styles }