import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';

import { setName } from '../stores/actions/playerAction';

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

const HomeScreen = (props) => {
  const { navigation } = props;

  const [playerName, setPlayerName] = useState(useSelector((state) => state.player.name));
  const [isDisable, setIsDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isDisable & (playerName !== '')) setIsDisable(false);
    else if (!isDisable & (playerName === '')) setIsDisable(true);
  }, [playerName]);

  const renderIcon = (iconProps) => (
    <TouchableWithoutFeedback
      onPress={() => {
        setPlayerName('');
      }}
    >
      <Icon {...iconProps} name="close-square-outline" />
    </TouchableWithoutFeedback>
  );

  async function handlePlayGame(difficulty) {
    dispatch(setName(playerName));
    navigation.navigate('Board', { difficulty });
  }

  async function onPlayerNameChange(val) {
    setPlayerName(val);
  }

  return (
    <Layout style={styles.layout}>
      <Layout style={styles.nameAndDifficulty}>
        <Layout style={styles.name}>
          <Input
            // textStyle={{ textAlign: 'center' }}
            label={(evaProps) => <Text {...evaProps}>Name</Text>}
            caption={(evaProps) => <Text {...evaProps}>Your Name</Text>}
            placeholder="Insert your name!"
            accessoryRight={renderIcon}
            value={playerName}
            onChangeText={onPlayerNameChange}
          />
        </Layout>
        <Layout style={styles.difficulty}>
          <Button
            style={styles.difficultyButton}
            status="success"
            onPress={() => handlePlayGame('easy')}
            disabled={isDisable}
          >
            {(evaProps) => <Text {...evaProps}>Easy</Text>}
          </Button>
          <Button
            style={styles.difficultyButton}
            status="warning"
            onPress={() => handlePlayGame('medium')}
            disabled={isDisable}
          >
            {(evaProps) => <Text {...evaProps}>Medium</Text>}
          </Button>
          <Button
            style={styles.difficultyButton}
            status="danger"
            onPress={() => handlePlayGame('hard')}
            disabled={isDisable}
          >
            {(evaProps) => <Text {...evaProps}>Hard</Text>}
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomeScreen;
