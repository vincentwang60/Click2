import {StyleSheet} from 'react-native';
import globals from '../../utilities.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    position: 'absolute',
    color: '#000',
    fontSize: 5*globals.VW,
    left: 8*globals.VW,
    fontFamily: 'Nunito-Bold'
  },
  input: {
    position: 'absolute',
    top: 25*globals.VH,
    padding: 8*globals.VW,
  }
});

export {styles}