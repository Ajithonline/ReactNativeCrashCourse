import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const ImageScreen = () => {
  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={{ uri: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg' }}
      ></Image>
      <Image style={styles.image} source={require('../Assets/arms.jpeg')}></Image>
    </SafeAreaView>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
