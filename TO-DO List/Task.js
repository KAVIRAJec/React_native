import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Task = ({ task, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{task}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
