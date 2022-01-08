import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Drawer/Profile';
import TabScreen from './Tabs/TabScreen';
import StackScreen from './Stack/StackScreen';

const Drawer = createDrawerNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen component={TabScreen} name="TabScreen"></Drawer.Screen>
        <Drawer.Screen component={StackScreen} name="StackScreen"></Drawer.Screen>
        <Drawer.Screen component={Profile} name="Profile"></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
