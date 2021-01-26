import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary,grey } = colors

const styles = StyleSheet.create({
    feedContainer:{
        width: '100%',
        padding: 8,
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
     feedHeader:{
         width:'100%',
         height:50,
         flex:1,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
         padding: 10,
         borderBottomColor: grey,
         borderStyle:'solid',
         borderBottomWidth:1,
    
     },
     profileImage:{
         position:'absolute',
         left:10,
         width:40,
         height:40,
         borderRadius:20,
     },
     feedTitle:{
        fontSize:20,
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
     },
     closeBtn:{
         top:55,
         right:-10,
         alignSelf:'flex-end',
        alignItems:'flex-end',
        zIndex:99999,
        width:50,
        height:50,

     },
     closeBtnContainer:{
         width:'100%',
         height:'100%'
     },
     closeBtnTxt:{
         fontSize:30,
         zIndex:999,
         textAlign:'center',
         color:'grey',
      
     },
     feedContent:{
         flex:1,
         flexDirection:'row',
     }


});




export { styles }