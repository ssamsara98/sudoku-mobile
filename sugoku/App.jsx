import React from 'react';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { default as theme } from './theme.json';

import useCachedResources from './hooks/useCachedResources';
import Navigator from './navigation/Navigator';
import store from './store';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <AppLoading  />;
  } else {
    return (
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <StatusBar />
          <Navigator />
        </ApplicationProvider>
      </Provider>
    );
  }
};

export default App;
