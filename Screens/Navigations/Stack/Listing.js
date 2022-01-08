import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Listing = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Goto Details screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Listing;
