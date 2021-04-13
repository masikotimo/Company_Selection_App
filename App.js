import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import ScreenContainer from './src/Navigation/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <ScreenContainer />
      <StatusBar hidden />
    </View>
  );
}
