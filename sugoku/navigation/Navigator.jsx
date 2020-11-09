import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import BoardScreen from '../screens/BoardScreen';
import FinishScreen from '../screens/FinishScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="LaunchPage"
        component={HomeScreen}
        options={{
          title: 'Launch Page',
          drawerIcon: (drawerConfig) => {
            return <Ionicons name="md-home" size={drawerConfig.size} color={drawerConfig.color} />;
          },
        }}
      />
      <Drawer.Screen
        name="LeaderBoard"
        component={LeaderBoardScreen}
        options={{
          title: 'Leader Board',
          drawerIcon: (drawerConfig) => {
            return <Ionicons name="md-book" size={drawerConfig.size} color={drawerConfig.color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const GameStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Home" component={HomeDrawer} options={{ headerShown: false }} />
      <Stack.Screen
        name="Board"
        component={BoardScreen}
        options={{ title: 'Game Board' }}
        initialParams={{ difficulty: 'easy' }}
      />
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
