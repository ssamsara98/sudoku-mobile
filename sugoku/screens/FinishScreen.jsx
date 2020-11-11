import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
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
    color: '#F66723',
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
    return () => {};
  }, []);

  return (
    <Layout style={styles.root}>
      <Layout style={styles.congratulation}>
        <Text style={styles.congratulationText} category="h1">
          Congratulation
        </Text>
        <Text category="h2">{playerName}</Text>
        <Text>
          Has completed game in <Text category="h5">`{difficulty}`</Text> mode within
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

export default FinishScreen;
