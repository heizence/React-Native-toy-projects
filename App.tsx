import React from 'react';
import {StyleSheet} from 'react-native';
import {Navigator} from './src/Navigator';

function App(): React.JSX.Element {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
