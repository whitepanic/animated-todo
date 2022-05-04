import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AppContiner from './src/components/app-container';
import Main from './src/screens/main'

export default function App() {
  return (
    <AppContiner>
      <Main />
    </AppContiner>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
