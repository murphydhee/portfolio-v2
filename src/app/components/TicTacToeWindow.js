"use client";
import React from "react";
import Modal from "./Modal";
import TicTacToeGame from "./TicTacToeGame";

const TicTacToeWindow = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} className="w-[560px] smbelow:w-[95%]">
    <h1 className="text-2xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
      Tic Tac Toe
    </h1>
    <TicTacToeGame />
  </Modal>
);

export default TicTacToeWindow;
