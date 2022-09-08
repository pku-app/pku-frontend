import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme} from 'native-base';
import RootNavigation from './src/screens/navigation'
import Store from './src/store'
import COLORS from './src/components/ColorPallete';

const theme = extendTheme({ colors: COLORS });

export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar />
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
            <RootNavigation />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
