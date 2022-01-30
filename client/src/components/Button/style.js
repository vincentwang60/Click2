import {StyleSheet} from 'react-native';
import globals from '../../utilities.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 84 * globals.VW,
    backgroundColor: 'black',
    height: 5 * globals.VH,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 3.5*globals.VW,
    color: 'white'
  },
});

export {styles};
