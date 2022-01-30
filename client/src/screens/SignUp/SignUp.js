import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {styles} from './style.js';
import globals from '../../utilities.js';

import Input from '../../components/Input/Input.js';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = props => {
  const [errors, setErrors] = useState({
    email: '',
    pass: '',
    cPass: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFF','#F0F0F0']} style={styles.container}>
        <Text style={[styles.text1, {top: 15 * globals.VH}]}>
          Create an account!
        </Text>
        <Text style={[styles.text1, {top: 19 * globals.VH, color: '#8F8F8F'}]}>
          Register with your email.
        </Text>
        <View style={styles.input}>
          <Input
            title="Email"
            placeholder="john_doe@university.edu"
            onChange={text => {
              props.setEmail(text);
            }}
            secure={false}
            error={errors.email}
          />
          <Input
            title="Password"
            placeholder="Password"
            onChange={text => {
              props.setPass(text);
            }}
            secure={true}
            error={errors.pass}
          />
          <Input
            title="Confirm Password"
            placeholder="Confirm Password"
            onChange={text => {
              props.setCPass(text);
            }}
            secure={true}
            error={errors.cPass}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default SignUp;

/*

        
*/
