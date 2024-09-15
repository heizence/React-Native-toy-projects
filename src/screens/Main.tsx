import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigator';
import {actions, Note} from '../Types';
import {getAllNotes} from '../AsyncFunctions';
import {useFocusEffect} from '@react-navigation/native';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

const Main = ({navigation}: MainScreenProps) => {
  const [notes, setNotes] = useState<Note[]>([]);

  // get data when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  const getData = async () => {
    console.log('#getData');
    let notesFromAsync = await getAllNotes();
    //console.log('notes : ', notes);
    setNotes(notesFromAsync);
  };

  const renderItem = (item: Note) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('EachNoteScreen', {
            type: actions.SHOW,
            ...item,
          });
        }}
        style={styles.eachNoteView}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{marginTop: 5}}>
          {item.contents}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        renderItem={({item}) => renderItem(item)}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={styles.showNoNotesTxt}>
              <Text style={{fontSize: 20}}>No notes</Text>
            </View>
          );
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  eachNoteView: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f4f5f2',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbd9',
  },
  showNoNotesTxt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
