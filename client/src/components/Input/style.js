import {StyleSheet} from 'react-native';
import globals from '../../utilities.js';

const styles = StyleSheet.create({
  container: {
    width: 84*globals.VW,
    paddingBottom: 1.5*globals.VH,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    color: '#8F8F8F',
    fontSize: 15,
  },
  textInput: {
    color: '#000',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F',
    paddingTop: 0.5*globals.VH,
    fontFamily: 'Nunito-Bold',
  },
  error: {
    color: '#F00',
  },
});

export {styles}