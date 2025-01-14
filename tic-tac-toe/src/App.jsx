import "./App.css";
import { useState } from "react";
function Square({ value, onSquareClick, highlight }) {
  return (
    <button className={`square ${highlight}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const { winner } = calculateWinner(squares);
    if (squares[i] !== "　" || winner) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function renderSquare(i, line) {
    const highlight = line && line.includes(i) ? "highlight" : "";
    return (
      <Square
        key={i}
        value={squares[i]}
        highlight={highlight}
        onSquareClick={() => handleClick(i)}
      />
    );
  }

  function renderRowBody(row, line) {
    const ary = [];
    for (let col = 0; col < 3; col++) {
      ary.push(renderSquare(row * 3 + col, line));
    }
    return ary;
  }

  function renderRow(row, line) {
    return (
      <div key={row} className="board-row">
        {renderRowBody(row, line)}
      </div>
    );
  }

  function renderBoard(line) {
    let board = [];
    for (let i = 0; i < 3; i++) {
      board.push(renderRow(i, line));
    }
    return board;
  }

  const { winner, line } = calculateWinner(squares);
  const IsFull = squares.every((square) => square !== "　");
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (IsFull) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      {renderBoard(line)}
    </>
  );
}

export default function App() {
  const [history, setHistory] = useState([Array(9).fill("　")]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(step) {
    setCurrentMove(step);
  }

  function handleToggleOrder() {
    setIsAscending(!isAscending);
  }

  function movePosition(step, move) {
    const previous = history[move - 1];
    if (previous) {
      for (let i = 0; i < step.length; i++) {
        if (step[i] !== previous[i]) {
          const row = Math.floor(i / 3) + 1;
          const col = (i % 3) + 1;
          return `(${row}, ${col})`;
        }
      }
    }
    return "";
  }

  const xIsNext = currentMove % 2 === 0;
  const tmp_moves = history.map((_step, move) => {
    const position = movePosition(_step, move);
    let description =
      move > 0 ? `Go to move #${move} ${position}` : "Go to game start";
    return (
      <li key={move}>
        {currentMove === move ? (
          `You are at move #${move} ${position}`
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  const moves = isAscending ? tmp_moves : tmp_moves.reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={handleToggleOrder}>Toggle Order</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
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
    if (
      squares[a] != "　" &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
}
