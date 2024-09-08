import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main';
import EachNote from './screens/EachNote';
import {Note} from './Types';
import Header from './components/Header';

export type RootStackParamList = {
  Main: undefined;
  EachNote: Note;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const renderHeader = (title: string) => {
  return <Header title={title} />;
};

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
            header: () => renderHeader(route.params.title),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
