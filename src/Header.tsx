// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {RootStackParamList} from './Navigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

type DrawerNavigation = DrawerNavigationProp<RootStackParamList, 'Main'>;

const HeaderComp = () => {
  const navigation = useNavigation<DrawerNavigation>();

  useEffect(() => {
    console.log('');
  }, []);

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
          title
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
        <TouchableOpacity>
          <Entypo
            name={'dots-three-vertical'}
            size={30}
            color={'black'}
            style={[styles.rightBtn, {marginLeft: 10}]}
          />
        </TouchableOpacity>
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
