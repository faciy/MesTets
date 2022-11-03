import {Alert} from 'react-native';

const AlertFunction = (first: string, second: string, testOnpress: any) => {
  Alert.alert(first, second, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => testOnpress()},
  ]);
};

export default AlertFunction;
