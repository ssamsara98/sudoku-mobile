import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LeaderBoardScreen = () => {
  return (
    <Layout style={styles.root}>
      <Text category="h1">Leader Board Screen</Text>
    </Layout>
  );
};

export default LeaderBoardScreen;
