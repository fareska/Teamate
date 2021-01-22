import { Platform, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { colors } from '../COLORS'
const { primary, secondary, grey } = colors
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainFeedsContainer: {
    width: '100%',
    backgroundColor: primary,
    minHeight: windowHeight,
    top: -30

  },
  feedsScrollable: {
    width: '100%',
    backgroundColor: primary,
    minHeight: windowHeight,
    top: 0,
    paddingTop: 0,

  },
  feedsScrollableContainer: {
    width: '100%',
    paddingTop: 0,
    marginBottom: 200,
    alignItems: 'center',
    backgroundColor: grey
  },
  footer: {
    width: '100%',
    height: 300,
    alignItems: 'center'

  },
  floatingContainer: {
    width: '100%',
    top: windowHeight * 0.95,
    zIndex: 9999,

  },
  androidFloating: {
    width: 100,
    height: 100,
    // alignSelf: 'flex-end'

  },



});




export { styles }