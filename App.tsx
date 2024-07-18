/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from './src/Navigator';

/* This defines a functional component named App.
In React, functional components are simply functions that return a JSX element.
The : React.JSX.Element part is a TypeScript type annotation indicating that this function returns a JSX element.
*/
function App(): React.JSX.Element {
  return <Navigator />;
}

export default App;
