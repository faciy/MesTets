import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Home from './src/Home';

const App = () => {
  const [test, setTest] = useState('false');

  useEffect(() => {
    console.log('TEST');
  });

  return (
    <View>
      <Text>App{test}</Text>
      <Home text={'home'} />
    </View>
  );
};

export default App;
