import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listing from './Listing';
import Details from './Details';
const StackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen component={Listing} name="Listing"></Stack.Screen>
      <Stack.Screen component={Details} name="Details"></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackScreen;
