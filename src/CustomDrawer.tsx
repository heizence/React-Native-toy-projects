// src/components/Feed.tsx
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

const CustomDrawer = () => {
  return (
    <DrawerContentScrollView style={{}}>
      <View style={{height: 100}}>
        <Text>11</Text>
        <Text>22</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
