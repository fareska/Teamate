import { Platform, StyleSheet,Dimensions } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary,grey } = colors
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    EventMenu:{
        width:'100%',
        backgroundColor: primary,
        paddingLeft:20,
        paddingRight:20,
        zIndex:999
    },
    evenMenuContainer:{
        backgroundColor:grey,
        
        alignItems: 'center',
    },
    titleContainer: {
        width: "100%",
        justifyContent: 'flex-end',
        padding:20,
        marginTop: 30,
        marginBottom: 30,
    },
    title: {
        fontWeight: "700",
        paddingBottom: 10,
        fontSize: 28,
    },
    subTitle: {
        fontWeight: "600",
        fontSize: 15,
        color: 'grey',
    },

    eventInputsContainer: {
        width: "100%",
        padding:30,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    label: {
        color: primary,
        fontSize: 20,
        fontWeight: '600',
    },
    inputContainer: {
        width: '100%',
        height: 100,
        marginTop: 20
    },
    pickerContainer: {
        width: '100%',
        height: Platform.OS === 'ios' ? 250 : 100,
        marginTop: 30,
        zIndex: 10
    },
    input: {
        width: '100%',
        borderBottomColor: "darkgrey",
        borderStyle: 'solid',
        borderBottomWidth: 1,
        fontSize: 30,
    },
    picker: {
        marginTop: Platform.OS === 'ios' ? 0 : 30,
        width: '100%',
        height: 30,
        borderBottomColor: "darkgrey",
        borderStyle: 'solid',
        fontSize: 20,
    },


    signInBtnContainer: {
        height: 250,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    touchableButton: {
        width: '90%',
        height: 40,
        borderRadius: 8,
        alignSelf:'center'

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

    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },

    signUpBtn: {
        width:'40%',
       height:30,
       alignSelf: 'flex-end',
       alignItems:'flex-end',
       marginRight: '10%',
    },
    sinUpBtnText: {
        color: primary,
        fontSize: 20,
        fontWeight: '600',
    },
    footer:{
        width:'100%',
        height:300,
    },
    mapContainer:{
        width: '100%',
        height: 200,
    
      },flag:{
        width: 30,
        height:30
    }

});




export { styles }