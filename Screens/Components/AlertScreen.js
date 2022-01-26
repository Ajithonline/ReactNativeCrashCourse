import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React from 'react';

const AlertScreen = () => {
  const ShowAlert = () => {
    Alert.alert('Title', 'Subtitle', [
      { text: 'Ask me later', onPress: () => console.log('Ask me later') },
      { text: 'Okay', onPress: () => console.log('Okay') },
      { text: 'Cancel', onPress: () => console.log('Cancel') },
    ]);
  };
  return (
    <View style={styles.container}>
      <Button title="ShowAlert" color="red" onPress={ShowAlert}></Button>
      <TouchableOpacity onPress={ShowAlert} style={styles.customButton}>
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
