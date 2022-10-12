import {View, Text} from 'react-native';
import React from 'react';

const Intro = props => {
  return (
    <View style={{flex: 1}} testID={'wrapper'}>
      <Text style={{color: 'red'}} testID={'text'}>
        {props.value}
      </Text>
    </View>
  );
};

export default Intro;
