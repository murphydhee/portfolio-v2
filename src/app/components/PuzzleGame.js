"use client";
import React, { useState } from "react";

const DIFFICULTIES = {
  easy: { label: "Easy", pieces: 12, cols: 4, rows: 3 },
  medium: { label: "Medium", pieces: 20, cols: 5, rows: 4 },
  hard: { label: "Hard", pieces: 35, cols: 7, rows: 5 },
};

const BOARD_W = 480;
const BOARD_H = 360;

const shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

const PuzzleGame = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [pieces, setPieces] = useState(null);
  const [order, setOrder] = useState(null);
  const [selected, setSelected] = useState(null);
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const startPuzzle = () => {
    if (!imageSrc) return;
    const { cols, rows } = DIFFICULTIES[difficulty];
    const img = new Image();
    img.onload = () => {
      const pieceW = BOARD_W / cols;
      const pieceH = BOARD_H / rows;

      // Cover-fit the source image into the board before slicing.
      const scale = Math.max(BOARD_W / img.width, BOARD_H / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const offsetX = (BOARD_W - drawW) / 2;
      const offsetY = (BOARD_H - drawH) / 2;

      const full = document.createElement("canvas");
      full.width = BOARD_W;
      full.height = BOARD_H;
      full.getContext("2d").drawImage(img, offsetX, offsetY, drawW, drawH);

      const nextPieces = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const canvas = document.createElement("canvas");
          canvas.width = pieceW;
          canvas.height = pieceH;
          canvas
            .getContext("2d")
            .drawImage(full, col * pieceW, row * pieceH, pieceW, pieceH, 0, 0, pieceW, pieceH);
          nextPieces.push({ originalIndex: row * cols + col, dataUrl: canvas.toDataURL() });
        }
      }

      let shuffled = shuffle(nextPieces.map((_, i) => i));
      if (shuffled.every((value, index) => value === index)) {
        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
      }

      setPieces(nextPieces);
      setOrder(shuffled);
      setMoves(0);
      setSolved(false);
      setSelected(null);
    };
    img.src = imageSrc;
  };

  const handlePieceClick = (slotIndex) => {
    if (solved) return;
    playClick();

    if (selected === null) {
      setSelected(slotIndex);
      return;
    }
    if (selected === slotIndex) {
      setSelected(null);
      return;
    }

    const nextOrder = [...order];
    [nextOrder[selected], nextOrder[slotIndex]] = [nextOrder[slotIndex], nextOrder[selected]];
    setOrder(nextOrder);
    setSelected(null);
    setMoves((m) => m + 1);

    if (nextOrder.every((pieceIndex, slot) => pieces[pieceIndex].originalIndex === slot)) {
      setSolved(true);
    }
  };

  const reset = () => {
    setPieces(null);
    setOrder(null);
  };

  if (!pieces) {
    const { cols, rows } = DIFFICULTIES[difficulty];
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
          id="puzzle-upload"
        />
        <label
          htmlFor="puzzle-upload"
          className="flex flex-col items-center justify-center gap-2 w-full h-40 border-2 border-dashed border-gray-400 border-opacity-30 rounded-xl cursor-pointer hover:bg-white hover:bg-opacity-5 transition"
        >
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt="" className="h-full object-contain rounded-xl" />
          ) : (
            <span className="text-sm text-gray-300">Click to upload a photo</span>
          )}
        </label>

        <div className="flex gap-2">
          {Object.entries(DIFFICULTIES).map(([key, d]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                playClick();
                setDifficulty(key);
              }}
              className={`py-2 px-4 rounded-lg text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                difficulty === key
                  ? "bg-white bg-opacity-20"
                  : "bg-black bg-opacity-30 hover:bg-opacity-40"
              }`}
            >
              {d.label}
              <span className="block text-[10px] text-gray-400">{d.pieces} pieces</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={!imageSrc}
          onClick={() => {
            playClick();
            startPuzzle();
          }}
          className="py-2 px-6 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 disabled:opacity-40 disabled:cursor-not-allowed transition text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Shuffle and start ({cols * rows} pieces)
        </button>
      </div>
    );
  }

  const { cols, rows } = DIFFICULTIES[difficulty];

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-gray-300">
        {solved ? `Solved in ${moves} moves! 🎉` : `Moves: ${moves} — click two pieces to swap`}
      </p>
      <div
        className="grid gap-[2px] bg-black bg-opacity-50 p-1 rounded-lg"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, width: BOARD_W }}
      >
        {order.map((pieceIndex, slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => handlePieceClick(slot)}
            aria-label={`Puzzle piece ${slot + 1}`}
            className={`relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              selected === slot ? "ring-2 ring-blue-400" : ""
            }`}
            style={{ aspectRatio: `${BOARD_W / cols} / ${BOARD_H / rows}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pieces[pieceIndex].dataUrl}
              alt=""
              className="w-full h-full object-cover block"
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          playClick();
          reset();
        }}
        className="py-2 px-5 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Try a different photo
      </button>
    </div>
  );
};

export default PuzzleGame;
