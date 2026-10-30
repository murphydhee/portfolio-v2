import React from "react";
import Image from "next/image";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { FaGamepad, FaImages } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const DesktopItems = ({
  isStartMenuOpen,
  setShowModal,
  setGamesOpen,
  setGithubOpen,
  setSubbyOpen,
  setPhotosOpen,
}) => {
  return (
    <div className={isStartMenuOpen ? "hidden" : "block w-full"}>
      <div className="flex flex-col items-start justify-start w-full p-6 gap-4">
        <button
          type="button"
          className="flex flex-col items-center justify-center p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            setShowModal(true);
          }}
        >
          <FcFolder className="text-4xl" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Projects
          </p>
        </button>
        <button
          type="button"
          className="flex flex-col items-center justify-center p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            setGithubOpen(true);
          }}
        >
          <VscGithubInverted className="text-4xl text-white" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Github
          </p>
        </button>

        <button
          type="button"
          className="flex flex-col items-center justify-center rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            setGamesOpen(true);
          }}
        >
          <FaGamepad className="text-4xl text-green-600" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Games
          </p>
        </button>

        <button
          type="button"
          className="flex flex-col items-center justify-center rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            setSubbyOpen(true);
          }}
        >
          <Image
            src="/subby.png"
            width={44}
            height={44}
            className="rounded-xl"
            alt="Subby app icon"
          />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Subby
          </p>
        </button>

        <button
          type="button"
          className="flex flex-col items-center justify-center rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            setPhotosOpen(true);
          }}
        >
          <FaImages className="text-4xl text-sky-400" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Photos
          </p>
        </button>
      </div>
    </div>
  );
};

export default DesktopItems;
