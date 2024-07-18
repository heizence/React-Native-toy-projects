import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from './components/Feed';
import AddFeed from './components/AddFeed';
import {routes} from './Routes';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.Feed} component={Feed} />
        <Stack.Screen name={routes.AddFeed} component={AddFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
