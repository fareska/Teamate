import { StyleSheet } from 'react-native'
import { colors } from './COLORS'
const { primary, secondary } = colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Roboto"
  },
  signIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    flex: 1,
    width: "100%"
  },

  titleContainer: {
    flex: 1,
    width: "100%"
  },

  signInInputsContainer: {
    flex: 1,
    width: "100%"
  }
});
console.log(primary);

export { styles }