import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style.js';

import SignUp from '../SignUp/SignUp.js';

const Auth = () => {
  const [email, setEmail] = useState(undefined);
  const [pass, setPass] = useState(undefined);
  const [cPass, setCPass] = useState(undefined);
  return (
    <View style={styles.container}>
      <SignUp email={email} pass={pass} cPass={cPass} setEmail={setEmail} setPass={setPass} setCPass={setCPass} />
    </View>
  );
};
export default Auth;
