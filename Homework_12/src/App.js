import './App.css';
import * as React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Box, Button, ChakraProvider, Flex, Text, VStack } from '@chakra-ui/react';


const ticTacToe = createSlice({
  name: 'TicTacToe',
  initialState: {
    squares: Array(9).fill(null),
    currentStep: 0,
    winner: null,
    nextValue: 'X',
    status: 'First move Player X !',
  },
  reducers: {
    selectSquare(state, action) {
      if (!state.winner && !state.squares[action.payload]) {
        const newSquares = [...state.squares];
        newSquares[action.payload] = calculateNextValue(state.squares);
        const winner = calculateWinner(newSquares);
        const nextValue = calculateNextValue(newSquares);
        const status = calculateStatus(winner, newSquares, nextValue);
        return {
          squares: newSquares,
          winner,
          nextValue,
          status
        };
      }
    },
    restart(state) {
      const newSquares = Array(9).fill(null);
      const winner = calculateWinner(newSquares);
      const nextValue = calculateNextValue(newSquares);
      const status = calculateStatus(winner, newSquares, nextValue);
      return {
        squares: newSquares,
        winner,
        nextValue,
        status,
      };
    },
  },
});


export const { selectSquare, restart, jumpToMove } = ticTacToe.actions;


const store = configureStore({
  reducer: ticTacToe.reducer,
});


function Board() {
  const { status, squares } = useSelector(state => state);
  const dispatch = useDispatch();
  function selectSquareHandler(squareIndex) {
    dispatch(selectSquare(squareIndex));
  }
  function renderSquare(i) {
    return (
      <Button
        w='100px'
        h='100px'
        variant="outline"
        borderWidth="2px"
        borderColor="gray.300"
        onClick={() => selectSquareHandler(i)}>
        {squares[i]}
      </Button>
    );
  }

  return (
    <VStack mt={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        {status}
      </Text>
      <Flex >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Flex>
      <Flex >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Flex>
      <Flex >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Flex>
    </VStack>
  );
}

function Game() {
  const dispatch = useDispatch();
  function handleRestart() {
    dispatch(restart());
  }
  return (
    <Box bg="gray.100" minH="100vh" p={10}>
      <Box maxW="md" mx="auto" bg="white" p={6} borderRadius="lg">
        <Board />
        <Button size="md" onClick={handleRestart} mt={4} colorScheme="teal">
          restart
        </Button>
      </Box>
    </Box>
  );
}

function calculateStatus(winner, squares, nextValue) {
  if (winner) {
    return (
      <Text>
          Winner:
          <Text color="green">
          {winner}
          </Text>
      </Text>
    );
  } else if (squares.every(Boolean)) {
    return (
      <Text>
          Scratch:
          <Text color="gray">
          {squares}
          </Text>
      </Text>
    );
  } else {
    return (
      <Text>
          Next player:
          <Text color="blue">
          {nextValue}
          </Text>
      </Text>
    );
  }
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">
          <Game />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
