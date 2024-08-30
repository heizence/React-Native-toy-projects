// src/components/Feed.tsx
import React, {useEffect} from 'react';
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
import {counters, currentCounter, increase, decrease} from './zustand/Store';

/*
RootStackParamList has to be like this : 
type RootStackParamList = {
  Main: undefined;
};
 */
type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main = ({navigation, route}: MainProps) => {
  const countersStore = counters();
  const currentCounterName = currentCounter();
  const increaseFunc = increase();
  const decreaseFunc = decrease();

  let counts = countersStore[currentCounterName];

  useEffect(() => {
    // console.log('### Main');
    // console.log('### currentCounterName  : ', currentCounterName);
    // console.log('### counts  : ', counts);
  }, [countersStore]);

  const add = () => {
    //  setCount(prev => prev + 1);
    increaseFunc(currentCounterName);
  };

  const subtract = () => {
    //    setCount(prev => prev - 1);
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
