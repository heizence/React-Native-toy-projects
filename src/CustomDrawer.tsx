import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {counters, addCounter} from './zustand/Store';

const CustomDrawer = () => {
  const countersStore = counters();
  const addCounterFunc = addCounter();

  useEffect(() => {
    return () => {};
  }, []);

  const addNewCounter = () => {
    Alert.prompt(
      'Add a new counter',
      'Do you really want to delete this counter?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Delete',
          onPress: () => {
            removeCounterFunc(currentCounterName);
          },
        },
      ],
    );
  };

  return (
    <DrawerContentScrollView style={styles.container}>
      <TouchableOpacity>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
          }}>
          + Add counter
        </Text>
      </TouchableOpacity>
      {Object.keys(countersStore).map((name, index) => (
        <Text key={name + index} style={styles.counterName}>
          {name}
        </Text>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  counterContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  counterName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  counterValue: {
    fontSize: 24,
    marginVertical: 10,
  },
});

export default CustomDrawer;
