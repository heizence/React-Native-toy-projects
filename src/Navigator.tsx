import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main';
import EachNote from './screens/EachNote';
import MainHeader from './components/MainHeader';

export type RootStackParamList = {
  MainScreen: undefined;
  EachNoteScreen: {
    type: string;
    id?: string;
    title?: string;
    contents?: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const renderMainHeader = (props: any) => {
  return <MainHeader {...props} />;
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'MainScreen'}
          component={Main}
          options={props => ({
            header: () => renderMainHeader(props),
          })}
        />
        <Stack.Screen
          name={'EachNoteScreen'}
          component={EachNote}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
