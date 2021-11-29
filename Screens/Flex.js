import React from 'react';
import { View, StyleSheet } from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 50,
    backgroundColor: 'yellow',
    flexDirection: 'column',
  },
  box1: {
    flex: 2,
    backgroundColor: 'red',
  },
  box2: {
    flex: 2,
    backgroundColor: 'blue',
  },
  box3: {
    flex: 2,
    backgroundColor: 'green',
  },
});
