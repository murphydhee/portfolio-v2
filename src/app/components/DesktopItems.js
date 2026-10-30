"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { FaGamepad, FaImages } from "react-icons/fa";
import DraggableIcon from "./DraggableIcon";
import useIsDesktopViewport from "./useIsDesktopViewport";
import "react-toastify/dist/ReactToastify.css";

const iconButtonClasses =
  "flex flex-col items-center justify-center p-1 rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Default column positions match the original static layout, so a
// first-time visitor sees the same thing as before — only diverges once
// someone actually drags an icon.
const ROW_HEIGHT = 84;
const COLUMN_X = 24;

const DesktopItems = ({
  isStartMenuOpen,
  setShowModal,
  setGamesOpen,
  setGithubOpen,
  setSubbyOpen,
  setPhotosOpen,
}) => {
  const containerRef = useRef(null);
  const isDesktop = useIsDesktopViewport();

  const icons = [
    {
      id: "projects",
      label: "Projects",
      onActivate: () => setShowModal(true),
      content: (
        <>
          <FcFolder className="text-4xl" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Projects
          </p>
        </>
      ),
    },
    {
      id: "github",
      label: "Github",
      onActivate: () => setGithubOpen(true),
      content: (
        <>
          <VscGithubInverted className="text-4xl text-white" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Github
          </p>
        </>
      ),
    },
    {
      id: "games",
      label: "Games",
      onActivate: () => setGamesOpen(true),
      content: (
        <>
          <FaGamepad className="text-4xl text-green-600" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Games
          </p>
        </>
      ),
    },
    {
      id: "subby",
      label: "Subby",
      onActivate: () => setSubbyOpen(true),
      content: (
        <>
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
        </>
      ),
    },
    {
      id: "photos",
      label: "Photos",
      onActivate: () => setPhotosOpen(true),
      content: (
        <>
          <FaImages className="text-4xl text-sky-400" aria-hidden="true" />
          <p className="text-white text-center text-xs mt-1 font-medium drop-shadow-md">
            Photos
          </p>
        </>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      className={
        isStartMenuOpen
          ? "hidden"
          : "relative w-full h-full"
      }
    >
      {icons.map((icon, index) => (
        <DraggableIcon
          key={icon.id}
          id={icon.id}
          label={icon.label}
          defaultPosition={{ x: COLUMN_X, y: COLUMN_X + index * ROW_HEIGHT }}
          containerRef={containerRef}
          draggable={isDesktop}
          onActivate={icon.onActivate}
          className={iconButtonClasses}
        >
          {icon.content}
        </DraggableIcon>
      ))}
    </div>
  );
};

export default DesktopItems;
