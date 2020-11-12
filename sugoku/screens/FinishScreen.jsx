import React, { useEffect } from 'react';
import { BackHandler, StyleSheet, ToastAndroid } from 'react-native';
import { Button, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { pushBoard } from '../stores/actions/leaderboardAction';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 100,
  },
  congratulation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratulationText: {
    marginBottom: 10,
  },
});

const FinishScreen = (props) => {
  const { navigation } = props;

  const playerName = useSelector((state) => state.player.name);
  const difficulty = useSelector((state) => state.game.difficulty);
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pushBoard(difficulty));
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  function handleBackButton() {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
  }

  return (
    <Layout style={styles.root}>
      <Layout style={styles.congratulation}>
        <Text style={styles.congratulationText} category="h1" status="warning">
          Congratulation
        </Text>
        <Text category="h2">{playerName}</Text>
        <Text>
          Has completed game in{' '}
          <Text category="h5" status="success">
            `{difficulty}`
          </Text>{' '}
          mode within
        </Text>
        <Text category="h3">{count}</Text>
        <Text category="s2">seconds</Text>
      </Layout>
      <Layout>
        <Button
          appearance="outline"
          status="success"
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          {(evaProps) => <Text {...evaProps}>Back to Home</Text>}
        </Button>
      </Layout>
    </Layout>
  );
};

export const finishScreenSetting = {
  header: () => {
    return (
      <SafeAreaView>
        <TopNavigation
          alignment="center"
          title={() => (
            <Text category="h2" status="primary">
              Finish Screen
            </Text>
          )}
        />
      </SafeAreaView>
    );
  },
};

export default FinishScreen;
