import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import uuid from 'react-native-uuid';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigator';
import {actions, Note} from '../Types';
import {createNote, deleteNote, updateNote} from '../AsyncFunctions';

type EachNoteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EachNoteScreen'
>;

const EachNote = ({route, navigation}: EachNoteScreenProps) => {
  const typeState = route.params.type;
  const [noteId, setNoteId] = useState<string>(route.params.id || '');
  const [titleState, setTitleState] = useState<string>(
    route.params.title || '',
  );
  const [contentsState, setContentsState] = useState<string>(
    route.params.contents || '',
  );
  const {width, height} = Dimensions.get('window');
  const inputRef = useRef<any>(null);

  //console.log('check type : ', typeState);  // for check

  const addNewNote = async (_title: string, _contents: string) => {
    console.log('#addNewNote');
    const newId = uuid.v4().toString();
    console.log('check newId : ', newId);

    const noteObj: Note = {
      id: newId,
      title: _title || 'No title',
      contents: _contents,
    };
    console.log('noteObj : ', noteObj);
    await createNote(noteObj);
    setNoteId(newId);

    navigation.goBack();
  };

  const editNote = async (_title: string, _contents: string) => {
    console.log('#editNote');

    const noteObj: Note = {
      id: noteId,
      title: _title,
      contents: _contents,
    };
    console.log('noteObj : ', noteObj);
    await updateNote(noteObj);
    navigation.goBack();
  };

  const deleteNoteFunc = async (_id: string) => {
    console.log('#deleteNote');
    await deleteNote(noteId);
    navigation.goBack();
  };

  const gobackFunc = () => {
    if (typeState === actions.ADD) {
      addNewNote(titleState, contentsState);
    } else {
      editNote(titleState, contentsState);
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={gobackFunc}>
          <Image
            source={require('../assets/back.png')}
            style={styles.backBtnImg}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.title}
          numberOfLines={1}
          value={titleState}
          onChangeText={text => {
            setTitleState(text);
          }}
          placeholder="Title"
        />

        <TouchableOpacity
          onPress={() => {
            deleteNoteFunc(noteId);
          }}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.deleteBtnImg}
          />
        </TouchableOpacity>
      </View>
      <View>
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
          onChangeText={text => {
            setContentsState(text);
          }}
          value={contentsState}
          multiline={true}
          style={styles.noteInput}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb70342',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  },
  backBtnImg: {
    width: 40,
    height: 40,
  },
  deleteBtnImg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  noteInput: {
    padding: 20,
  },
});

export default EachNote;
