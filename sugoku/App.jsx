import 'react-native-get-random-values';
import React from 'react';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';

import { default as theme } from './theme.json';

import useCachedResources from './hooks/useCachedResources';
import Navigator from './navigation/Navigator';
import store from './store';

const App = () => {
  const [isLoadingComplete, appLoading] = useCachedResources();

  if (!isLoadingComplete) {
    return appLoading;
  } else {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <IconRegistry icons={EvaIconsPack} />
        <StatusBar />
        <Navigator />
      </ApplicationProvider>
    );
  }
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
