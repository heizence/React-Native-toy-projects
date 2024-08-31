// src/components/Feed.tsx
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {counters, currentCounter, increase, decrease} from './zustand/Store';

const Main = () => {
  const countersStore = counters();
  const currentCounterName = currentCounter();
  const increaseFunc = increase();
  const decreaseFunc = decrease();

  let counts = countersStore[currentCounterName];

  const add = () => {
    increaseFunc(currentCounterName);
  };

  const subtract = () => {
    decreaseFunc(currentCounterName);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* for alignment. */}
      <View></View>
      <Text
        style={{
          fontSize: 100,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
        }}>
        {counts}
      </Text>
      <View>
        <TouchableOpacity onPress={add} style={styles.buttons}>
          <Text style={styles.buttonsTxt}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={subtract} style={styles.buttons}>
          <Text style={styles.buttonsTxt}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  buttons: {
    paddingVertical: 10,
    borderRadius: 40,
    marginHorizontal: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  buttonsTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Main;
