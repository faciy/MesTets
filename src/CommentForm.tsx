import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const CommentForm = props => {
  return (
    <View>
      <TextInput
        testID={'input'}
        value={props.value}
        onChangeText={props.onChange}
      />
      <TouchableOpacity testID={'submit'} onPress={props.onSubmit}>
        Submit
      </TouchableOpacity>
    </View>
  );
};

export default CommentForm;
