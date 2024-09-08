// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {RootStackParamList} from '../Navigator';

type EachNoteProps = NativeStackScreenProps<RootStackParamList, 'EachNote'>;

const EachNote = ({navigation, route}: EachNoteProps) => {
  const [contents, setContents] = useState();

  useEffect(() => {
    console.log('');
  }, []);

  const onChangeText = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoFocus={true}
        onChangeText={onChangeText}
        value={contents}
        multiline={true}
        style={styles.noteInput}
        textAlignVertical="top"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb70342',
  },
  noteInput: {
    padding: 20,
  },
});

export default EachNote;
