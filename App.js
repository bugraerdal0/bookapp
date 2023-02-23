import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './src/navigation/index.js';
// You can import from local files

// or any pure javascript modules available in npm
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default App;