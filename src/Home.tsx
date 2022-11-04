import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Home = ({text}: any) => {
  const [changeText, setChangeText] = useState(false);

  const handleChangeText = () => {
    setChangeText(!changeText);
  };

  return (
    <View>
      <Text>Home {changeText ? 'heureux' : text}</Text>
      <TouchableOpacity
        onPress={handleChangeText}
        style={{backgroundColor: 'red'}}>
        <Text> APPUYER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
