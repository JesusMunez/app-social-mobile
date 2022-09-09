// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

import MainScreen from './screens/MainScreen';
import PostScreen from './screens/PostScreen';
import { Navigation } from './screens/Navigation';

export default function App() {
  return (    
    <View style={styles.container}>
      <StatusBar/>
      <Navigation/>
    </View>    
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});