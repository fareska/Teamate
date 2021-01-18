import {StyleSheet}from 'react-native'
import {colors} from './COLORS'
const {primary,secondary} = colors

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: secondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
console.log('mobile styles');
  export  {styles}