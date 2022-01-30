import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import globals from '../../utilities.js';
import {styles} from './style.js';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
