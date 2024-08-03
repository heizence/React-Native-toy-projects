import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import MainPage from './components/MainPage';
import FeedDetail from './components/FeedDetail';
import AddFeed from './components/AddFeed';
import {routes} from './Routes';

/**
 * This is used to specify parameters for the routes in the stack navigator.
 */
export type RootStackParamList = {
  MainPage: undefined;

  FeedDetail: {
    id: string;
    user: string;
    user_profile: string;
    image: string;
    title: string;
    description: string;
  };
  AddFeed: undefined; // this do not take any parameters, hence "undefined"
};

/**
 * To type check our screens, we need to annotate the navigation prop and the route prop received by a screen.
 * The navigator packages in React Navigation export a generic types to define types
 * for both the navigation and route props from the corresponding navigator.
 */
export type MainPageProps = NativeStackScreenProps<
  RootStackParamList,
  'MainPage'
>;

/*
 * This creates a stack navigator using RootStackParamList type.
 * The type is provided to ensure type safety for the routes and their parameters.
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'MainPage'} component={MainPage} />
        <Stack.Screen name={'FeedDetail'} component={FeedDetail} />
        <Stack.Screen name={'AddFeed'} component={AddFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
