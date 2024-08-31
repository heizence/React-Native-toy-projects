import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
const Drawer = createDrawerNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: true,
  gestureEnabled: false,
  presentation: 'modal',
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  header: () => <Header />,
};

const CustomDrawerComp = (props: any) => {
  return <CustomDrawer {...props} />;
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={CustomDrawerComp}
        screenOptions={{
          drawerType: 'front',
        }}>
        <Drawer.Screen name="Main" component={Main} options={screenOptions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
