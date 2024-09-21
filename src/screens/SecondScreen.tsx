import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigator';

type screenProps = NativeStackScreenProps<RootStackParamList, 'SecondScreen'>;

const SecondScreen = ({route}: screenProps) => {
  const [contentsState, setContentsState] = useState<string>(
    route.params.contents,
  );
  const {width, height} = Dimensions.get('window');
  const inputRef = useRef<any>(null);

  useEffect(() => {
    //console.log('check route : ', route);
  }, []);

  const onChangeText = (text: string) => {
    setContentsState(text);
  };

  return (
    <View style={styles.container}>
      {/* for focusing textinput area */}
      <TouchableOpacity
        activeOpacity={1}
        style={{
          position: 'absolute',
          width: width,
          height: height,
        }}
        onPress={() => {
          inputRef.current?.focus();
        }}></TouchableOpacity>
      <TextInput
        ref={inputRef}
        autoFocus={false}
        onChangeText={onChangeText}
        value={contentsState}
        multiline={true}
        style={styles.noteInput}
        textAlignVertical="top"
      />
    </View>
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

export default SecondScreen;
