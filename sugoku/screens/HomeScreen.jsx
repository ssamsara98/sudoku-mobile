import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameAndDifficulty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 250,
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  difficulty: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  difficultyButton: {
    // width: '100%',
    // height: 100,
    width: 200,
    marginBottom: 15,
  },
});

const HomeScreen = () => {
  return (
    <Layout style={styles.layout}>
      <Layout style={styles.nameAndDifficulty}>
        <Layout style={styles.name}>
          <Input
            textStyle={{ textAlign: 'center' }}
            label={(evaProps) => <Text {...evaProps}>Name</Text>}
            caption={(evaProps) => <Text {...evaProps}>Your Name</Text>}
          />
        </Layout>
        <Layout style={styles.difficulty}>
          <Button style={styles.difficultyButton} status="success">
            {(evaProps) => <Text {...evaProps}>Easy</Text>}
          </Button>
          <Button style={styles.difficultyButton} status="warning">
            {(evaProps) => <Text {...evaProps}>Medium</Text>}
          </Button>
          <Button style={styles.difficultyButton} status="danger">
            {(evaProps) => <Text {...evaProps}>Hard</Text>}
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomeScreen;
