import {View, Text} from 'react-native';
import React from 'react';
import {useAppSelector} from './redux/hooks';
import {RootState} from './redux/store';

const Home = () => {
  const getArticles = useAppSelector(
    (state: RootState) => state.gestStock.redirection,
  );

  const showText = useAppSelector((state: RootState) => state.todoList.texte);

  return (
    <View>
      <Text>{getArticles}</Text>
      <Text>{showText}</Text>
    </View>
  );
};

export default Home;
