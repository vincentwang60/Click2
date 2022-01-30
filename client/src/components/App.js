import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

import Auth from "../screens/Auth/Auth.js"

const App = () => {
  const [userId, setUserId] =useState(undefined)
  return (
    <Auth />
  )
}
export default App;