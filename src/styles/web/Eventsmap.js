import { Platform, StyleSheet,Dimensions } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary,grey } = colors
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  flag:{
        width: 30,
        height:30
    }

});




export { styles }