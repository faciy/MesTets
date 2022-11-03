import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Switch,
} from 'react-native';
import {
  Transitioning,
  TransitioningView,
  Transition,
} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

Ionicons.loadFont();
Feather.loadFont();

// declare var global: {HermesInternal: null | {}};

const App = () => {
  const ref = useRef<TransitioningView>(null);
  const [isDarkMode, setDarkMode] = useState(false);
  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={600} />
      <Transition.Out type="fade" durationMs={600} />
    </Transition.Together>
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Transitioning.View style={{flex: 1}} {...{ref, transition}}>
        {isDarkMode && (
          <View
            style={{...StyleSheet.absoluteFillObject, backgroundColor: 'black'}}
          />
        )}
        <View style={{marginVertical: 40, marginHorizontal: 20}}>
          <View style={styles.switchWrapper}>
            <Switch
              value={isDarkMode}
              onValueChange={() => {
                if (ref.current) {
                  ref.current.animateNextTransition();
                }
                setDarkMode(!isDarkMode);
              }}
            />
            {isDarkMode ? (
              <Ionicons
                name="ios-sunny"
                size={25}
                style={{marginLeft: 20}}
                color={'#fff'}
              />
            ) : (
              <Ionicons
                name="ios-moon"
                size={25}
                style={{marginLeft: 20}}
                color={'teal'}
              />
            )}
          </View>
          {/* <View style={styles.imageWrapper}>
            <Image
              source={require('./src/assets/images/woman.jpg')}
              style={styles.image}
            />
          </View> */}
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginBottom: 25,
              color: isDarkMode ? '#fff' : 'black',
            }}>
            An Image of a Model
          </Text>
          <View style={styles.iconsWrapper}>
            <View style={styles.icon}>
              <Feather name="github" size={35} color="#fff" />
            </View>
            <View style={styles.icon}>
              <Feather name="twitter" size={35} color="#fff" />
            </View>
            <View style={styles.icon}>
              <Feather name="facebook" size={35} color="#fff" />
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginBottom: 25,
              color: isDarkMode ? '#fff' : 'black',
            }}>
            Follow me on my Social media Accounts for the best JPEGS!!
          </Text>
        </View>
      </Transitioning.View>
    </>
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
  },
  image: {
    height: 300,
    width: 300,
  },
  imageWrapper: {
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    overflow: 'hidden',
    marginVertical: 70,
    alignSelf: 'center',
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  icon: {
    backgroundColor: 'teal',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default App;
