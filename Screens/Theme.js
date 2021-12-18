import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const themes = {
  dark: { background: 'black', foreground: 'white' },
  light: { background: 'white', foreground: 'black' },
};

const ThemeContext = React.createContext(themes.dark);

const Theme = () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <SafeAreaView>
        <Toolbar />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default Theme;

const Toolbar = () => {
  return (
    <View>
      <PrimaryButton />
    </View>
  );
};

const PrimaryButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.foreground }}>Primary Button</Text>
    </TouchableOpacity>
  );
};
