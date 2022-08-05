import React from 'react';
import RootNavigation from './src/screens/navigation'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import  Store  from './src/store'

export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar />
      <NavigationContainer>
          <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
