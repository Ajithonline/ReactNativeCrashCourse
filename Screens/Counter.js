import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(10);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={() => setCounter((currentcount) => currentcount + 1)}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
