import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary, grey } = colors

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    friends: {
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    image: {

        borderRadius: 10
    },

    sports: {
        marginTop:10,
        width:30,
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        fontSize: 90,
        margin:5,
        borderRadius: 2,
        borderColor: 'black'
    }

});




export { styles }