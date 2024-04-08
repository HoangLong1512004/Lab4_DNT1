import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lab4bai1 from './layout/lab4bai1';
import Kt from './layout/Kt';

export default function App() {
  return (
    <View style={styles.container}>
      <Lab4bai1/>
      {/* <Kt/> */}
    </View>
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
