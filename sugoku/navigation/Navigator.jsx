import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import BoardScreen, { boardScreenSetting } from '../screens/BoardScreen';
import FinishScreen, { finishScreenSetting } from '../screens/FinishScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabBarIcon(props) {
  return <Ionicons size={22} {...props} />;
}

const LeaderBoardTab = () => {
  return (
    <Tab.Navigator initialRouteName="LeaderboardMedium">
      <Tab.Screen
        name="LeaderboardEasy"
        children={(navProps) => <LeaderBoardScreen {...navProps} mode="easy" />}
        options={{
          title: 'Easy',
          tabBarLabel: 'Easy Mode',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star-outline" color={color} />,
        }}
      />
      <Tab.Screen
        name="LeaderboardMedium"
        children={(navProps) => <LeaderBoardScreen {...navProps} mode="medium" />}
        options={{
          title: 'Medium',
          tabBarLabel: 'Medium Mode',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star-outline" color={color} />,
        }}
      />
      <Tab.Screen
        name="LeaderboardHard"
        children={(navProps) => <LeaderBoardScreen {...navProps} mode="hard" />}
        options={{
          title: 'Hard',
          tabBarLabel: 'Hard Mode',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star-outline" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

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
        component={LeaderBoardTab}
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
        options={boardScreenSetting}
        initialParams={{ difficulty: 'easy' }}
      />
      <Stack.Screen name="Finish" component={FinishScreen} options={finishScreenSetting} />
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
