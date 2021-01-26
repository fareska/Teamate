import { Platform, StyleSheet,Dimensions } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary,grey } = colors
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  flag:{
        width: 40,
        height:40
    },
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    map: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },showEventContainer:{
        position:'absolute',
        bottom:-20,
        width:'100%',
        zIndex:9999999
    }


});

export { styles }