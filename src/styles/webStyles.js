import {StyleSheet}from 'react-native'
import {colors} from './COLORS'
const {primary,secondary} = colors

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
console.log(primary);

  export  {styles}