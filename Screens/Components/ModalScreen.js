import { View, Text, Modal, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={openModal} style={styles.openBtn}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={isVisible}>
        <SafeAreaView>
          <View style={styles.modalContent}>
            <Text>Modal opened</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeBtn}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalScreen;
const styles = StyleSheet.create({
  openBtn: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
  },
  closeBtn: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  modalContent: {
    padding: 15,
    backgroundColor: 'gray',
  },
});
