import { Platform, StyleSheet } from 'react-native'
import { colors } from './COLORS'
const { primary, secondary } = colors

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" && "20px",
        alignItems: 'center',
        justifyContent: 'center',
    },
    signIn: {
        flex: 1,
        fontFamily: "",
        alignItems: 'center',
        justifyContent: 'center',
    },




});




export { styles }