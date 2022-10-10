import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    name: 'charles',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    name: 'kouassi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    name: 'konan',
  },
];

const Item = ({title, item, index}) => {
  const [test, setTest] = useState(false);
  console.log('ITEM', index);

  const handleAccept = item => {
    setTest(true);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{test ? item.name : title}</Text>
      <TouchableOpacity onPress={() => handleAccept(item)}>
        <Text style={{backgroundColor: 'white', width: '100%', height: 30}}>
          ACCEPTER
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  const [inViewPort, setInViewPort] = useState(1);

  const renderItem = ({item, index}) => (
    <Item item={item} index={index} title={item.title} />
  );

  const onViewableItemsChanged = useRef(({changed}) => {
    if (changed && changed.length > 0) {
      setInViewPort(changed[0].index + 1);
    }
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 5,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'yellow',
          width: '100%',
          height: 50,
        }}>
        <Text>
          {' '}
          {inViewPort} / {DATA.length}{' '}
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={item => item.id}
        horizontal={true}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 120,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
