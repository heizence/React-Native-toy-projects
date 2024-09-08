import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Main from './screens/Main';
import EachNote from './screens/EachNote';
import {Note} from './Types';

/**
 * This is used to specify parameters for the routes in the stack navigator.
 */
export type RootStackParamList = {
  Main: undefined;
  EachNote: Note;
};

/*
 * This creates a stack navigator using RootStackParamList type.
 * The type is provided to ensure type safety for the routes and their parameters.
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Main'}
          component={Main}
          options={{
            headerTitle: 'All notes',
          }}
        />
        <Stack.Screen
          name={'EachNote'}
          component={EachNote}
          options={({route}) => ({
            headerTitle: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
