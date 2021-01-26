import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary, grey } = colors

const styles = StyleSheet.create({
    commentMainContainer:{
        width:'100%',
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },
    commentContainer: {
        width: '75%',
        padding:20,
        backgroundColor:grey,
        borderRadius:8, 
        marginBottom:10,
        marginTop:10,

    },
    label: {
        color: primary,
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'flex-start'
    },
    deleteBtn:{
        alignSelf:"flex-end"
    },
    profileImage:{
        width:46,
        height:46,
        borderRadius:23

    }

});




export { styles }