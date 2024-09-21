import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main';
import SecondScreen from './screens/SecondScreen';
import {ExampleType} from './Types';
import Header from './components/Header';

export type RootStackParamList = {
  Main: undefined;
  SecondScreen: ExampleType;
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
            headerTitle: 'header title',
          }}
        />
        <Stack.Screen
          name={'SecondScreen'}
          component={SecondScreen}
          options={({route}) => ({
            header: () => renderHeader(route.params.title),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
