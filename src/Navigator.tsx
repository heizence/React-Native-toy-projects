import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Main from './Main';
import Header from './Header';
import CustomDrawer from './CustomDrawer';

export type RootStackParamList = {
  Main: undefined;
  Drawer: undefined;
};

/*
 * This creates a stack navigator using RootStackParamList type.
 * The type is provided to ensure type safety for the routes and their parameters.
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: true,
  gestureEnabled: false,
  presentation: 'modal',
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  header: () => <Header />,
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerType: 'front',
        }}>
        <Drawer.Screen name="Main" component={Main} options={screenOptions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
