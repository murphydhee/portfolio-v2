"use client";
import React from "react";
import Modal from "./Modal";
import { BsArrowUpRight } from "react-icons/bs";

const DRIVE_FOLDER_ID = "1dwLkmu6Va-ZMJwyF_f_nRGaVMQy5belm";
const FOLDER_URL = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`;

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

// Google's own supported embed for a shared folder — no API key needed,
// but the folder has to be shared as "Anyone with the link can view".
const PhotosWindow = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[700px] smbelow:w-[95%]">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
          Photos
        </h1>
        <div className="w-full rounded-lg overflow-hidden bg-black bg-opacity-30">
          <iframe
            src={`https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER_ID}#grid`}
            title="Shared photos"
            className="w-full h-[480px] smbelow:h-[360px] border-0"
            loading="lazy"
          />
        </div>
        <a
          href={FOLDER_URL}
          target="_blank"
          rel="noreferrer"
          onClick={playClick}
          className="mt-5 self-start inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
        >
          Open folder in Google Drive
          <BsArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </Modal>
  );
};

export default PhotosWindow;
