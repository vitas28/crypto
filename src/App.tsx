/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {FC} from 'react';
import {SafeAreaView} from 'react-native';

import {SocketProvider} from './context';
import MainScreen from './screens/Main';
import {globalStyles} from './styles/global';

const App: FC = () => {
  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <SocketProvider>
        <MainScreen />
      </SocketProvider>
    </SafeAreaView>
  );
};

export default App;
