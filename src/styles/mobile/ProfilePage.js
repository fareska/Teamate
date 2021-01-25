import { Platform, StyleSheet } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary, grey } = colors

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingLeft:15,
        flex: 1,
        paddingRight:15
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
    },
    image: {
        
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
    }
    

});




export { styles }