import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BoardScreen from '../screens/BoardScreen';
import FinishScreen from '../screens/FinishScreen';

const Stack = createStackNavigator();

const GameStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Board" component={BoardScreen} options={{ title: 'Game Board' }} />
      <Stack.Screen name="Finish" component={FinishScreen} options={{ title: 'Finish Screen' }} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <GameStack />
    </NavigationContainer>
  );
};

export default Navigator;
