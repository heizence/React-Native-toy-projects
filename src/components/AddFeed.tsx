// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Post} from '../DummyAPI';

const AddFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [contents, setContents] = useState<string>('');

  useEffect(() => {}, []);

  const getData = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}>
        Add Image
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}>
        Contents
      </Text>
      <TextInput
        style={{
          width: 300,
          height: 30,
          padding: 0,
          fontSize: 15,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <Text>123</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          width: 80,
          height: 60,
          borderRadius: 10,
          backgroundColor: 'rgb(102, 153, 255)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          ADD
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default AddFeed;
