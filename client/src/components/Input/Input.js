import React, {useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import globals from '../../utilities.js';
import {styles} from './style.js';

const Input = props => {
  const [secure, setSecure] = useState(props.secure)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        placeholderTextColor="#8F8F8F"
        placeholder={props.placeholder}
        style={styles.textInput}
        onChangeText={props.onChange}
        secureTextEntry={secure}
      />
      <Text style={styles.error}>{props.error}</Text>
    </View>
  );
};
export default Input;
