import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';

export type RootStackParamList = {
  Main: undefined;
};

type DrawerParamList = {
  Main: undefined;
};

/*
 * This creates a stack navigator using RootStackParamList type.
 * The type is provided to ensure type safety for the routes and their parameters.
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator<DrawerParamList>();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
  presentation: 'modal',
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
};

const BasicFormStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Main'} component={Main} />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={Main}
        //options={{title: 'title'}}
      />
    </Drawer.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={Main} options={screenOptions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
