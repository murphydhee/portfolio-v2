"use client";
import React from "react";
import Modal from "./Modal";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaHandRock, FaPuzzlePiece } from "react-icons/fa";
import { GiTicTacToe } from "react-icons/gi";

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

const GameCard = ({ icon, label, blurb, onClick }) => (
  <button
    type="button"
    onClick={() => {
      playClick();
      onClick();
    }}
    className="flex flex-col items-center gap-2 text-left bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-4 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-opacity-40 transition"
  >
    {icon}
    <span className="text-white text-base font-medium">{label}</span>
    <span className="text-gray-400 text-xs text-center">{blurb}</span>
  </button>
);

// A small launcher grid — more games get added here over time. In-site
// games open their own window; external ones open in a new tab.
const GamesWindow = ({
  isOpen,
  onClose,
  onPlayMemoryMatch,
  onPlayTicTacToe,
  onPlayPuzzle,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[480px] smbelow:w-[95%]">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
          Games
        </h1>
        <div className="grid grid-cols-2 gap-3 w-full">
          <GameCard
            icon={<BsGrid3X3GapFill className="text-green-500 text-5xl" aria-hidden="true" />}
            label="Memory Match"
            blurb="Flip cards, find the pairs"
            onClick={() => {
              onClose();
              onPlayMemoryMatch();
            }}
          />
          <GameCard
            icon={<GiTicTacToe className="text-blue-400 text-5xl" aria-hidden="true" />}
            label="Tic Tac Toe"
            blurb="You can't win. Murphy sees to that."
            onClick={() => {
              onClose();
              onPlayTicTacToe();
            }}
          />
          <GameCard
            icon={<FaPuzzlePiece className="text-pink-400 text-5xl" aria-hidden="true" />}
            label="Bring Your Own Puzzle"
            blurb="Upload a photo, piece it back together"
            onClick={() => {
              onClose();
              onPlayPuzzle();
            }}
          />
          <a
            href="https://rock-paper-scissors-murphy.netlify.app"
            target="_blank"
            rel="noreferrer"
            onClick={playClick}
            className="flex flex-col items-center gap-2 bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-4 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-opacity-40 transition"
          >
            <FaHandRock className="text-amber-500 text-5xl" aria-hidden="true" />
            <span className="text-white text-base font-medium">
              Rock Paper Scissors
            </span>
            <span className="text-gray-400 text-xs text-center">
              Opens in a new tab
            </span>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default GamesWindow;
