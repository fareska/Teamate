import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary,grey } = colors

const styles = StyleSheet.create({
    feedContainer:{
        width: '100%',
        padding: 20,
        marginBottom:20,
        backgroundColor:'white'

    },
    feedSubContainer:{
        borderStyle: 'solid',
        borderColor: grey,
        borderWidth: 1
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
     feedHeader:{
         width:'100%',
         height:70,
         flex:1,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
         padding: 10,
         borderBottomColor: grey,
         borderStyle:'solid',
         borderBottomWidth:1,
         marginBottom:20,
     },
     profileImage:{
         position:'absolute',
         left:10,
         width:40,
         height:40,
         borderRadius:20,
     },
     feedTitle:{
        fontSize:30,
     },
     mapMarkerContainer:{
         zIndex:999999999

     },flagIcon:{
         width: 30,
         height:30
     },
     flagContainer:{
         width: 50,
         height:50,
         backgroundColor:secondary
     }


});




export { styles }