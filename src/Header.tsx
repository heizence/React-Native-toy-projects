// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {RootStackParamList} from './Navigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {
  counters,
  currentCounter,
  reset,
  editCounter,
  removeCounter,
} from './zustand/Store';

type DrawerNavigation = DrawerNavigationProp<RootStackParamList, 'Main'>;

const screenWidth = Dimensions.get('window').width;

const HeaderComp = () => {
  const countersStore = counters();
  const currentCounterName = currentCounter();
  const resetFunc = reset();
  const editCounterFunc = editCounter();
  const removeCounterFunc = removeCounter();

  const [modalVisible, setModalVisible] = useState(false);
  const [counterName, setCounterName] = useState(currentCounterName);
  const [countInput, setCountInput] = useState(
    countersStore[currentCounterName],
  );

  const navigation = useNavigation<DrawerNavigation>();

  // for check
  useEffect(() => {
    console.log('check countersStore : ', countersStore);
    console.log('check currentCounterName : ', currentCounterName);
    console.log('check counts : ', countersStore[currentCounterName]);
    //setCountInput(countersStore[currentCounterName]);
  }, [countersStore, currentCounterName]);

  const menuOnSelect = (value: number) => {
    switch (value) {
      // delete
      case 1:
        Alert.alert('', 'Do you really want to delete this counter?', [
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
        ]);
      // settings
      case 2:
        break;

      default:
        break;
    }
  };

  const resetCountsLocal = () => {
    resetFunc(currentCounterName);
  };

  const editCounterLocal = () => {
    editCounterFunc(currentCounterName, counterName, Number(countInput));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Feather name={'menu'} size={30} color={'black'} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            color: 'black',
            marginLeft: 10,
          }}>
          {currentCounterName}
        </Text>
      </View>

      <View style={[styles.row]}>
        <TouchableOpacity onPress={resetCountsLocal}>
          <Foundation
            name={'refresh'}
            size={30}
            color={'black'}
            style={styles.rightBtn}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCounterName(currentCounterName);
            setCountInput(String(countersStore[currentCounterName]));
            setModalVisible(true);
          }}>
          <Entypo
            name={'pencil'}
            size={30}
            color={'black'}
            style={styles.rightBtn}
          />
        </TouchableOpacity>

        <Menu onSelect={value => menuOnSelect(value)}>
          <MenuTrigger>
            <Entypo
              name={'dots-three-vertical'}
              size={30}
              color={'black'}
              style={[styles.rightBtn, {marginLeft: 10}]}
            />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption value={1}>
              <Text style={{color: 'black', fontSize: 18}}>Delete counter</Text>
            </MenuOption>
            <MenuOption value={2}>
              <Text style={{color: 'black', fontSize: 18}}>Settings</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Counter</Text>
            <TextInput
              style={styles.modalTxtInput}
              placeholder="name"
              value={counterName}
              onChangeText={setCounterName}
            />
            <TextInput
              style={styles.modalTxtInput}
              placeholder="counts"
              value={String(countInput)}
              keyboardType="numeric"
              onChangeText={setCountInput}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  editCounterLocal();
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFF9FF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBtn: {marginLeft: 20},

  // modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalView: {
    width: screenWidth - 50,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  modalTxtInput: {
    borderWidth: 0.7,
    marginBottom: 10,
    fontSize: 10,
  },
  button: {
    marginRight: 15,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default HeaderComp;
