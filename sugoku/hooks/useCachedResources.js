import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';

import { setBoard } from '../stores/actions/leaderboardAction';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const easyScoresStr = AsyncStorage.getItem('easy') || '[]';
      const mediumScoresStr = AsyncStorage.getItem('medium') || '[]';
      const hardScoresStr = AsyncStorage.getItem('hard') || '[]';

      await Promise.all([easyScoresStr, mediumScoresStr, hardScoresStr]).then(
        ([val1, val2, val3]) => {
          const easyScores = JSON.parse(val1);
          const mediumScores = JSON.parse(val2);
          const hardScores = JSON.parse(val3);

          dispatch(setBoard('easy', easyScores));
          dispatch(setBoard('medium', mediumScores));
          dispatch(setBoard('hard', hardScores));
        },
      );
    })();
    return () => {};
  }, []);

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
