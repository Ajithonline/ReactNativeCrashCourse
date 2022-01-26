import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const onChangeSwitchState = () => {
    setIsEnabled((currentValue) => !currentValue);
  };
  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        ios_backgroundColor="gray"
        trackColor={{ false: 'red', true: 'violet' }}
        onChange={onChangeSwitchState}
      ></Switch>
    </View>
  );
};

export default SwitchScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
