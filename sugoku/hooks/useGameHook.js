import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearGame, fetchBoard } from '../stores/actions/gameAction';

export default function useGameHooks(difficulty) {
  const [isLoading, setIsLoading] = useState(true);
  const [board, setBoard] = useState([[]]);

  const sudokuBoard = useSelector((state) => state.game.board);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearGame());
    };
  }, []);

  useEffect(() => {
    dispatch(fetchBoard(difficulty));
  }, [dispatch]);

  useEffect(() => {
    const sudokuString = JSON.stringify(sudokuBoard);
    const parsedBoard = JSON.parse(sudokuString);

    setBoard(parsedBoard);

    return () => {
      setIsLoading(false);
    };
  }, [sudokuBoard]);

  return [isLoading, sudokuBoard, board, setBoard];
}
