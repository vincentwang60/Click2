import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import globals from '../../utilities.js';
import {styles} from './style.js';
import LinearGradient from 'react-native-linear-gradient';

const TEMPLATE = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
};
export default TEMPLATE;
