import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  return [
    isLoadingComplete,
    <AppLoading
      startAsync={() => {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        return Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      }}
      onFinish={() => {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }}
      // We might want to provide this error information to an error reporting service
      onError={console.warn}
      autoHideSplash
    />,
  ];
}
