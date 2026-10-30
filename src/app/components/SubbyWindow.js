"use client";
import React from "react";
import Modal from "./Modal";
import { BsArrowUpRight } from "react-icons/bs";

const SUBBY_URL = "https://www.mysubbyapp.com";

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

// Some sites block being framed (X-Frame-Options / CSP); if that happens
// the preview below just stays blank, so the direct-open button is always
// shown too, never conditionally, as a guaranteed way through.
const SubbyWindow = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[700px] smbelow:w-[95%]">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
          Subby
        </h1>
        <a
          href={SUBBY_URL}
          target="_blank"
          rel="noreferrer"
          onClick={playClick}
          className="mb-4 self-start inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition text-white text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Open Subby
          <BsArrowUpRight aria-hidden="true" />
        </a>
        <div className="w-full rounded-lg overflow-hidden bg-black bg-opacity-30">
          <iframe
            src={SUBBY_URL}
            title="Subby preview"
            className="w-full h-[420px] smbelow:h-[320px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </Modal>
  );
};

export default SubbyWindow;
