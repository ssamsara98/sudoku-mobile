import React from 'react';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import store from './store';
import HomeScreen from './screens/HomeScreen';
import BoardScreen from './screens/BoardScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <BoardScreen />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
