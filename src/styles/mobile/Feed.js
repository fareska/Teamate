import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary } = colors

const styles = StyleSheet.create({
    feedContainer:{
        width: '100%',
        padding: 20,
        marginBottom:20,
        backgroundColor:'white'

    },
    signUpBtn:{
        alignSelf: 'flex-end',
        marginRight: '10%'
     },
     sinUpBtnText:{
         color: primary,
         fontSize:15,
         fontWeight: '600',
     },

});




export { styles }