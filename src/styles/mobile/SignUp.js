import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary } = colors

const styles = StyleSheet.create({
    logoContainer: {
        marginTop:40,
        marginBottom:40,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    circle:{
        width: 60,
        height: 60,
        borderRadius:30,
        backgroundColor: primary,
    },
    logo: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '900'
    },
    signUp: {
        flex: 1,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    titleContainer: {
        width: "100%",
        justifyContent: 'flex-end',
        marginTop:30,
        marginBottom:30,
    },
    title: {
        fontWeight: "700",
        paddingBottom:10,
        fontSize: 28,
    },
    subTitle: {
        fontWeight: "600",
        fontSize: 15,
        color: 'grey',
    },

    signInInputsContainer: {
        width: "100%",
        alignItems:'flex-start',
        flexDirection:'column',
        justifyContent: 'space-evenly',
    },
    label:{
        color:primary,
        fontSize: 20,
        fontWeight:'600',
    },
    inputContainer:{
        width:'100%',
        marginTop: 30
    },
    input:{
        width:'100%',
        borderBottomColor:"darkgrey",
        borderStyle:'solid',
        borderBottomWidth:1,
        fontSize: 20,


    },
    signInBtnContainer: {
        height: 250,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:40
    },
    touchableButton:{
        width: '90%',
        height: 40,
        borderRadius: 8,
       margin:50,
       
    },
    signInBtn: {
        color: 'white',
        width: "100%",
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary,
    },
 
    btnText:{
        color:'white',
        fontSize:15,
        fontWeight: '600',
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
    signUpScrollable:{
      flex:1,
        width:'100%',
        height:'100%',
        
      },
      signUpScrollableContainer:{
          alignItems:'center'
      }, 
    

});




export { styles }