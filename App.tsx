import {View, Text} from 'react-native';
import React from 'react';
import useFecth from './src/useFecth';

const App = () => {
  const [data] = useFecth('https://jsonplaceholder.typicode.com/todos');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {data &&
        data.map(item => {
          return <Text key={item.id}>{item.title}</Text>;
        })}
    </View>
  );
};

export default App;
