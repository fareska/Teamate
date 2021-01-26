import { Dimensions, Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary, grey } = colors
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    profileMainContainer:{
        width:'100%',
        backgroundColor:primary,
        top:-190,
        height:windowHeight*1.5
    },
    container: {
        width:'100%',
        padding:40,
        paddingLeft:15,
        flex: 1,
        paddingRight:15,
        backgroundColor:'white'
    },

    dataConatiner:{
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    friends: {
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor:grey,
        borderStyle:'solid',
        borderWidth:1,
        marginTop:15,
        marginBottom:20,
    },
    sportsContainer: {
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop:15,
        marginBottom:20,
    },
    image: {
        margin:10,
        borderRadius: 10
    },
    
    sports: {
        marginTop:10,
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        fontSize: 90,
        margin:5,
        borderRadius: 2,
        borderColor: 'black'
    },

    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        width:'80%',
        margin:5
    },
    Button:{
        width:'40%',
        margin:5
    },

    userPartis:{
        margin:2
    },
    userEvents:{
        margin:2
    },
    editButton:{
        color:'red',
        width:'10%'
    },
    profileEventsCOntainer:{
        width:'100%',
        flex:1,
    
    },footer:{
        height:200,
        width:'100%'
    },
    profilePictureContainer:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:"center",
        marginBottom:30,
    }, 

    profilePic:{
        width:130,
        height:130,
        borderRadius:55,
        alignSelf:'center'

    },
    profileName:{
        marginTop:20,
        fontSize:30,
        color:secondary
    },
    label: {
        color: primary,
        fontSize: 20,
        fontWeight: '600',
    },
    sportTouchableButton: {
        width: '35%',
        height: 40,
        borderRadius: 8,
        margin: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },
    sportBtn:{
        color: 'white',
        width: "100%",
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondary,

    },
    selectedSportBtn:{
        color: 'white',
        width: "100%",
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondary,

    }

    

});




export { styles }