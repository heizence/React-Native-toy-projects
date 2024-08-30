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
import {DrawerActions} from '@react-navigation/native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {RootStackParamList} from './Navigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {counters, addCounter, setCurrentCounter} from './zustand/Store';

type DrawerNavigation = DrawerNavigationProp<RootStackParamList, 'Main'>;

const screenWidth = Dimensions.get('window').width;

const CustomDrawer = ({props}) => {
  const countersStore = counters();
  const addCounterFunc = addCounter();
  const setCurrentCounterFunc = setCurrentCounter();

  const [modalVisible, setModalVisible] = useState(false);
  const [counterName, setCounterName] = useState('');
  const [counts, setCounts] = useState();

  const navigation = useNavigation<DrawerNavigation>();

  useEffect(() => {
    console.log('check props : ', props);
    return () => {};
  }, []);

  const addNewCounter = () => {
    addCounterFunc(counterName);
    setCounterName('');
    setModalVisible(false);
  };

  const selectCounter = (counterName: string) => {
    setCurrentCounterFunc(counterName);
    // in Custom Drawer, have to use this instead of "navigation.closeDrawer();"
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <DrawerContentScrollView style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
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
        <TouchableOpacity
          key={name + index}
          onPress={() => selectCounter(name)}>
          <Text style={styles.counterName}>{name}</Text>
        </TouchableOpacity>
      ))}

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add New Counter</Text>
            <TextInput
              style={styles.modalTxtInput}
              placeholder="name"
              value={counterName}
              onChangeText={setCounterName}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  setCounterName('');
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button]} onPress={addNewCounter}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    marginBottom: 8,
  },
  counterValue: {
    fontSize: 24,
    marginVertical: 10,
  },

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
    textSize: 10,
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

export default CustomDrawer;
