import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import sugokuApi from '../apis/sugokuApi';
import secondConverter from '../helpers/secondConverter';

// import sudoku from '../dummy-data';
import encodeParams from '../helpers/sugokuEncoder';
import { countReset, countUp } from '../stores/actions/counterAction';
import { clearGame, fetchBoard } from '../stores/actions/gameAction';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'row',
    marginBottom: -2,
  },
  box: {
    marginHorizontal: -2,
    fontSize: 16,
    textAlign: 'center',
  },
  submitBtn: {
    marginVertical: 25,
  },
});

let timer;

const BoardScreen = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  // const [sudoku, setSudoku] = useState({ board: [[]] });
  const [board, setBoard] = useState([[]]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSolved, setIsSolved] = useState(false);
  const [isGameOn, setIsGameOn] = useState(true);
  const [isDisableSubmit, setIsDisableSubmit] = useState(false);

  const playerName = useSelector((state) => state.player.name);
  const sudokuBoard = useSelector((state) => state.game.board);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    timer = setInterval(() => {
      dispatch(countUp());
      console.log(counter);
    }, 1000);

    return () => {
      console.log('unmount');
      dispatch(clearGame());
      dispatch(countReset());
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(sudokuBoard));
    dispatch(fetchBoard(params.difficulty));
  }, [dispatch]);

  useEffect(() => {
    const sudokuString = JSON.stringify(sudokuBoard);
    const parsedBoard = JSON.parse(sudokuString);
    console.log(sudokuString);
    setBoard(parsedBoard);

    return () => {
      setIsLoading(false);
    };
  }, [sudokuBoard]);

  function onBoardChange(row, col, val) {
    const tempBoard = JSON.parse(JSON.stringify(board));
    tempBoard[row][col] = val;
    setBoard(tempBoard);
  }

  async function handleApply() {
    const body = { board };
    const data = encodeParams(body);

    setIsDisableSubmit(true);

    try {
      const solution = await sugokuApi({
        url: '/validate',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data,
      });

      Alert.alert('Sugoku Validation', solution.data.status);

      setIsDisableSubmit(false);

      if (solution.data.status === 'solved') {
        clearInterval(timer);
        setIsSolved(true);
        setIsGameOn(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async function handleSubmit() {
    navigation.navigate('Finish');
    clearInterval(timer);
  }

  async function handleSolveIt() {
    const data = { board: sudokuBoard };
    const body = encodeParams(data);

    setIsDisableSubmit(true);

    try {
      const solution = await sugokuApi({
        url: '/solve',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      const parsedBoard = JSON.parse(JSON.stringify(solution.data.solution));
      setBoard(parsedBoard);

      Alert.alert('Sugoku Validation', solution.data.status);
      setIsDisableSubmit(false);
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <Layout style={styles.root}>
      <Layout style={styles.title}>
        <Text category="h3">{secondConverter(counter)}</Text>
        <Text category="c1">{params.difficulty}</Text>
      </Layout>

      <Layout style={styles.title}>
        <Text category="s1">{playerName}</Text>
      </Layout>

      {isLoading ? (
        <Text category="h1">Loading...</Text>
      ) : (
        <>
          <Layout style={styles.board}>
            {board.map((row, rowIdx) => {
              return (
                <Layout style={styles.column} key={rowIdx}>
                  {row.map((col, colIdx) => {
                    const isDisable = sudokuBoard[rowIdx][colIdx] !== 0 || !isGameOn;
                    return (
                      <Input
                        textStyle={styles.box}
                        size="small"
                        disabled={isDisable}
                        keyboardType="number-pad"
                        value={`${col}`}
                        key={colIdx}
                        onChangeText={(nextValue) => onBoardChange(rowIdx, colIdx, nextValue)}
                      />
                    );
                  })}
                </Layout>
              );
            })}
          </Layout>
          <Layout style={styles.submitBtn}>
            <Button
              appearance="outline"
              status={isSolved ? 'success' : 'warning'}
              onPress={isSolved ? handleSubmit : handleApply}
              disabled={isDisableSubmit}
            >
              {(evaProps) => <Text {...evaProps}>{isSolved ? 'Submit' : 'Apply'}</Text>}
            </Button>
            <Button
              style={{ marginTop: 15 }}
              appearance="outline"
              status="info"
              onPress={handleSolveIt}
              disabled={isDisableSubmit}
            >
              {(evaProps) => <Text {...evaProps}>Just solve it!</Text>}
            </Button>
          </Layout>
        </>
      )}
    </Layout>
  );
};

export default BoardScreen;
