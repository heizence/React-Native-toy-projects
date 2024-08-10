// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {RootStackParamList} from './Navigator';
import HeaderComp from './Header';

/*
RootStackParamList has to be like this : 
type RootStackParamList = {
  Main: undefined;
};
 */

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main = ({navigation, route}: MainProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('');
  }, []);

  const add = () => {
    setCount(prev => prev + 1);
  };

  const subtract = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };
  console.log('rerendered');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp />
      {/* for alignment. */}
      <View></View>
      <Text
        style={{
          fontSize: 100,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
        }}>
        {count}
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
