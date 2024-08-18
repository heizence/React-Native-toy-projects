// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {RootStackParamList} from './Navigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {currentCounter, reset, removeCounter} from './zustand/Store';

type DrawerNavigation = DrawerNavigationProp<RootStackParamList, 'Main'>;

const HeaderComp = () => {
  const navigation = useNavigation<DrawerNavigation>();

  const currentCounterName = currentCounter();
  const resetFunc = reset();
  const removeCounterFunc = removeCounter();

  useEffect(() => {
    console.log('');
  }, []);

  const menuOnSelect = value => {
    console.log('## menuOnSelect : ', value);
    console.log('typeof value : ', typeof value);
    switch (value) {
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
      case 2:
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          {true ? (
            <Feather name={'menu'} size={30} color={'black'} />
          ) : (
            <AntDesign name={'arrowleft'} size={30} color={'black'} />
          )}
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
        <TouchableOpacity>
          <Foundation
            name={'refresh'}
            size={30}
            color={'black'}
            style={styles.rightBtn}
          />
        </TouchableOpacity>

        <TouchableOpacity>
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
});

export default HeaderComp;
