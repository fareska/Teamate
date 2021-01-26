import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary, grey } = colors

const styles = StyleSheet.create({
    commentsContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom:10,

    },

    commentInputContainer: {
        width:'90%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-between'
    },
    commentInput: {
        width: '80%',
        borderColor: "lightgrey",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 17,
        minHeight:40

    },
    postBtnContainer: {
        width: '18%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:primary,
        borderRadius:8,
        alignSelf:'flex-end',
        height:40

    },
    btnText: {
        textAlign: 'center',
        fontWeight:'600',
        color:'white'
    },
    seeCommentsBtnContainer:{
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        height:30,
        color:'grey'
    },
    seeCommentsText:{
        color:'grey'
    }

});




export { styles }