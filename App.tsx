/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Feed from './src/components/Feed';
import TabBar from './src/components/TabBar';

/* This defines a functional component named App.
In React, functional components are simply functions that return a JSX element.
The : React.JSX.Element part is a TypeScript type annotation indicating that this function returns a JSX element.
*/
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Feed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
