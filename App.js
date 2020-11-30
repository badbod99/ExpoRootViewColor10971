import React, { useState } from 'react';
import { Text, Button, View, StatusBar, StyleSheet } from 'react-native';
import { AppearanceProvider, useColorScheme as useNativeColorScheme } from 'react-native-appearance';

export default function AppContainer() {
  return (
    <AppearanceProvider>
      <App />
    </AppearanceProvider>
  );
}

function App() {
  const nativeColorScheme = useNativeColorScheme();
  const [colorScheme, setColorScheme] = useState(nativeColorScheme);

  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  const toggleColorScheme = () => {
    setColorScheme((currentScheme) => {
      return currentScheme == 'light' ? 'dark' : 'light';
    });
  };

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar barStyle={themeStatusBarStyle} />
      <Text style={[styles.text, themeTextStyle]}>Native color scheme: {nativeColorScheme}</Text>
      <Text style={[styles.text, themeTextStyle]}>Selected color scheme: {colorScheme}</Text>
      <Button onPress={toggleColorScheme} title="Toggle Theme" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#D0D0C0',
  },
  darkContainer: {
    backgroundColor: '#242C40',
  },
  lightThemeText: {
    color: '#242C40',
  },
  darkThemeText: {
    color: '#D0D0C0',
  },
});