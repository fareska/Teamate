import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary } = colors

const styles = StyleSheet.create({

    signIn: {
        flex: 1,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',

    },

    logoContainer: {
        flex: 0.7,
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

    titleContainer: {
        flex: 0.5,
        width: "100%",
        justifyContent: 'flex-end',
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
        flex: 1,
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
        width:'100%'
    },
    input:{
        width:'100%',
        borderBottomColor:"darkgrey",
        borderStyle:'solid',
        borderBottomWidth:1,
        fontSize: 20,

    },
    signInBtnContainer: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    touchableButton:{
        width: '90%',
        height: 40,
        borderRadius: 8,
        marginBottom: 10,
       
    },
    signInBtn: {
        color: 'white',
        width: "100%",
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary
    },
    signInBtnFacebook:{
        color: 'white',
        width: "100%",
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b5998'
    },
    btnText:{
        color:'white',
        fontSize:15,
        fontWeight: '600',
    },
    signUpBtn:{
       width:'40%',
       height:30,
       alignSelf: 'flex-end',
       alignItems:'flex-end',
       marginRight: '10%',
    

    },
    sinUpBtnText:{
        color: primary,
        fontSize:20,
        fontWeight: '600',
    },
    
});




export { styles }