import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Search from './Search';
import Cart from './Cart';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabScreen = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        component={Dashboard}
        name="Dashboard"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="rocket" size={20} color="black" />;
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen component={Search} name="Search"></Tabs.Screen>
      <Tabs.Screen component={Cart} name="Cart"></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default TabScreen;
