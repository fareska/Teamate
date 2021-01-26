import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary, grey } = colors

const styles = StyleSheet.create({
    commentsContainer: {
        width: '100%',
       
    },
    commentInput:{
        width:'100%',
        borderBottomColor:"darkgrey",
        borderStyle:'solid',
        borderBottomWidth:1,
        fontSize: 20,
    }

});




export { styles }