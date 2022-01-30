import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {styles} from './style.js';
import globals from '../../utilities.js';

import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = props => {
  const [firstSubmit, setFirstSubmit] = useState(true); //check whether user has ever submitted for error handling (no errors for first time)
  const [errors, setErrors] = useState({
    email: '',
    pass: 'test',
    cPass: 'testarooni',
  });

  const errorCheck = (force = false) => {
    //force = true to ignore firstSubmit
    if (!firstSubmit || force) {
      let newErrors = errors
      console.log('ERROR CHECKING!!!!!!!!!!!!!!!!!!!!!!!');
      //email checking
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(props.email)) {
        newErrors.email = "Please enter a valid email address"
      }
      else{
        newErrors.email = ''
      }
      //pass checking
      const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passRegex.test(props.pass)) {
        newErrors.pass = "Passwords must be minimum 8 characters, at least one letter and one number"
      }
      else{
        newErrors.pass = ''
      }
      if (props.pass != props.cPass){
        newErrors.cPass = "Passwords must match"
      }
      else{
        newErrors.cPass = ''
      }
      setErrors(newErrors)
    }
  };

  const onSubmit = () => {
    setFirstSubmit(false);
    console.log('submitting!', props.email, props.pass, props.cPass);
    errorCheck(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFF', '#F0F0F0']} style={styles.container}>
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
              errorCheck();
            }}
            secure={false}
            error={errors.email}
          />
          <Input
            title="Password"
            placeholder="Password"
            onChange={text => {
              props.setPass(text);
              errorCheck();
            }}
            secure={true}
            error={errors.pass}
          />
          <Input
            title="Confirm Password"
            placeholder="Confirm Password"
            onChange={text => {
              props.setCPass(text);
              errorCheck();
            }}
            secure={true}
            error={errors.cPass}
          />
        </View>
        <View style={styles.bottom}>
          <Button
            onPress={() => {
              onSubmit();
            }}
            text="Create an account"
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default SignUp;

/*

        
*/
