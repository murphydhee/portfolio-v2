"use client";
import React, { useState } from "react";

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (cells) => {
  for (const line of LINES) {
    const [a, b, c] = line;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return { winner: cells[a], line };
    }
  }
  return null;
};

// A true minimax player for O — it cannot legitimately lose or even be
// forced into anything but a win or a draw. The "VAR" gag below turns
// every remaining draw into a win too, so the final result is always AJ,
// no matter what the person plays.
const minimax = (cells, player) => {
  const result = calculateWinner(cells);
  if (result) return { score: result.winner === "O" ? 10 : -10 };
  if (cells.every(Boolean)) return { score: 0 };

  const moves = [];
  cells.forEach((cell, index) => {
    if (cell) return;
    const next = [...cells];
    next[index] = player;
    const { score } = minimax(next, player === "O" ? "X" : "O");
    moves.push({ index, score });
  });

  return player === "O"
    ? moves.reduce((best, m) => (m.score > best.score ? m : best))
    : moves.reduce((best, m) => (m.score < best.score ? m : best));
};

const EMPTY_BOARD = Array(9).fill(null);

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

const TicTacToeGame = () => {
  const [cells, setCells] = useState(EMPTY_BOARD);
  const [score, setScore] = useState({ you: 0, aj: 0 });
  const [status, setStatus] = useState("playing");
  const [message, setMessage] = useState("");
  const [winLine, setWinLine] = useState(null);

  const triggerVarWin = () => {
    setStatus("var-review");
    setMessage("VAR is reviewing...");
    setTimeout(() => {
      setMessage("VAR says O. AJ wins!");
      setScore((s) => ({ ...s, aj: s.aj + 1 }));
      setStatus("over");
    }, 1200);
  };

  const handleCellClick = (index) => {
    if (status !== "playing" || cells[index]) return;
    playClick();

    const afterPlayer = [...cells];
    afterPlayer[index] = "X";

    if (afterPlayer.every(Boolean)) {
      setCells(afterPlayer);
      triggerVarWin();
      return;
    }

    const { index: aiIndex } = minimax(afterPlayer, "O");
    const afterAi = [...afterPlayer];
    afterAi[aiIndex] = "O";
    setCells(afterAi);

    const aiResult = calculateWinner(afterAi);
    if (aiResult) {
      setWinLine(aiResult.line);
      setScore((s) => ({ ...s, aj: s.aj + 1 }));
      setMessage("AJ wins!");
      setStatus("over");
      return;
    }

    if (afterAi.every(Boolean)) {
      triggerVarWin();
    }
  };

  const playAgain = () => {
    setCells(EMPTY_BOARD);
    setStatus("playing");
    setMessage("");
    setWinLine(null);
  };

  return (
    <div className="flex flex-col items-center gap-4 text-white">
      <p className="font-Rubik text-sm text-gray-300">
        You {score.you} — {score.aj} AJ
      </p>
      <div className="grid grid-cols-3 gap-2">
        {cells.map((cell, index) => (
          <button
            key={index}
            type="button"
            disabled={status !== "playing" || Boolean(cell)}
            onClick={() => handleCellClick(index)}
            aria-label={cell ? `Cell ${index + 1}: ${cell}` : `Cell ${index + 1}, empty`}
            className={`w-20 h-20 flex items-center justify-center text-4xl font-medium rounded-lg bg-black bg-opacity-30 border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              winLine && winLine.includes(index)
                ? "border-blue-400"
                : "border-gray-400 border-opacity-10"
            }`}
          >
            {cell === "X" && <span>✕</span>}
            {cell === "O" && (
              <span className="rounded-full border-4 border-white w-10 h-10 block" />
            )}
          </button>
        ))}
      </div>
      {message && <p className="text-sm text-gray-300 font-Rubik">{message}</p>}
      {status === "over" && (
        <button
          type="button"
          onClick={() => {
            playClick();
            playAgain();
          }}
          className="py-2 px-5 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default TicTacToeGame;
