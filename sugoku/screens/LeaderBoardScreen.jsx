import { Button, Icon, Layout, List, ListItem, Text } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import secondConverter from '../helpers/secondConverter';
import leaderboardData from '../leaderboard-dummy';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const LeaderBoardScreen = (props) => {
  const { mode } = props;

  const scoreboard = useSelector((state) => state.leaderboard[mode]);
  const leaderboard = leaderboardData[mode];

  useEffect(() => {
    console.log(scoreboard);
    console.log(leaderboard);
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.root}>
        <Text category="h1" status="primary">
          Leader Board Screen
        </Text>
        <Text category="h3" style={{ textTransform: 'uppercase' }}>
          {mode}
        </Text>

        <List
          style={{
            width: '100%',
            marginVertical: 25,
            backgroundColor: 'transparent',
          }}
          data={leaderboard}
          renderItem={({ item }) => (
            <ListItem
              style={{ paddingHorizontal: 10 }}
              title={<Text category="h4">{item.name}</Text>}
              description={<Text category="h6">{secondConverter(item.time)}</Text>}
              accessoryRight={(listConfig) => (
                <Button size="tiny" status="danger">
                  <Icon {...listConfig} name="trash-2-outline" />
                </Button>
              )}
            />
          )}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default LeaderBoardScreen;
