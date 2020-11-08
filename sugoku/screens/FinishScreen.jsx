import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FinishScreen = (props) => {
  const { navigation } = props;

  const playerName = useSelector((state) => state.player.name);

  return (
    <Layout style={styles.root}>
      <Text style={{ color: '#F66723' }} category="h1">
        Congratulation
      </Text>
      <Text category="h5">{playerName}</Text>
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
  );
};

export default FinishScreen;
