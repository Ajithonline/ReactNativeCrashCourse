import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

const ActivityIndicatorScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="red" size="small"></ActivityIndicator>
      <ActivityIndicator color="blue" size="large"></ActivityIndicator>
    </View>
  );
};

export default ActivityIndicatorScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
