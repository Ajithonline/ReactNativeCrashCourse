import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { label, onButtonPress } = props || '';

  console.log('Rendered', label);
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={{ padding: 15, margin: 5, backgroundColor: 'gray' }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
