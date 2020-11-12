import AsyncStorage from '@react-native-community/async-storage';
import { Button, Icon, Layout, List, ListItem, Text, TopNavigation } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import secondConverter from '../helpers/secondConverter';
import { deleteBoard, setBoard } from '../stores/actions/leaderboardAction';

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

  const dispatch = useDispatch();

  function handleDeleteScore(difficulty, id) {
    dispatch(deleteBoard(difficulty, id));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        alignment="center"
        title={() => (
          <Text category="h1" status="primary">
            Leader Board
          </Text>
        )}
      />
      <Layout style={styles.root}>
        <Text category="h3" style={{ textTransform: 'uppercase' }} status="success">
          {mode}
        </Text>

        <List
          style={{
            width: '100%',
            marginVertical: 25,
            backgroundColor: 'transparent',
          }}
          data={scoreboard}
          renderItem={({ item }) => (
            <ListItem
              style={{ paddingHorizontal: 10 }}
              title={<Text category="h4">{item.name}</Text>}
              description={<Text category="h6">{secondConverter(item.time)}</Text>}
              accessoryRight={() => (
                <Button
                  size="tiny"
                  status="danger"
                  onPress={() => {
                    handleDeleteScore(mode, item.id);
                  }}
                >
                  <Icon
                    style={{ width: 24, height: 24, marginHorizontal: 8, tintColor: 'white' }}
                    name="trash-2-outline"
                  />
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
