import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Platform, StatusBar } from 'react-native';
import Header from './src/Header';
import Content from './src/Content';
import Navbar from './src/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header />
        <Content />
        <Navbar />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
