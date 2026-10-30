"use client";
import React from "react";
import Modal from "./Modal";
import PuzzleGame from "./PuzzleGame";

const PuzzleWindow = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} className="w-[560px] smbelow:w-[95%]">
    <h1 className="text-2xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
      Bring Your Own Puzzle
    </h1>
    <PuzzleGame />
  </Modal>
);

export default PuzzleWindow;
