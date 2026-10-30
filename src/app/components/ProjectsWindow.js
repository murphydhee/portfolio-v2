"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MacWindowChrome from "./MacWindowChrome";
import { FiPlus, FiMinus } from "react-icons/fi";
import { BiReset } from "react-icons/bi";

const MIN_SCALE = 0.5;
const MAX_SCALE = 1.5;
const COLS = 5;
const ROWS = 5;
const CELL_W = 140;
const CELL_H = 150;
const TILE_W = COLS * CELL_W;
const TILE_H = ROWS * CELL_H;
const REPEAT = 7; // tiles rendered around the center one, wide enough to
// cover the viewport at every zoom level once the pan offset is wrapped.

// Wraps a pan offset into [-size/2, size/2). Since the tiled grid repeats
// identically every `size` pixels, snapping the offset back by one tile is
// visually invisible — this is what makes the pan feel infinite with no
// edge and no visible seam.
const wrap = (value, size) => {
  const half = size / 2;
  return (((value + half) % size) + size) % size - half;
};

const REAL_PROJECTS = [
  {
    id: "aeolus",
    name: "Aeolus",
    icon: "/aeolus.png",
    href: "https://aeolus-weather.vercel.app/",
  },
  {
    id: "todo",
    name: "To Do List",
    icon: "/list.svg",
    href: "https://mfon-todo-lists.netlify.app",
  },
  {
    id: "anime",
    name: "Anime Show Tracker",
    icon: "/eyes.gif",
    href: null,
    iconProps: { unoptimized: true },
  },
  {
    id: "lms",
    name: "Learning Management System",
    icon: "/learn.svg",
    href: null,
  },
  { id: "chatto", name: "Chatto", icon: "/chatto.png", href: null },
  {
    id: "disney",
    name: "Disney Plus Clone",
    icon: "/disney.png",
    href: "https://github.com/murphydhee/disney-plus-clone",
  },
  { id: "qr", name: "QR Code Attendance", icon: "/qr.png", href: null },
];

const TOTAL_SLOTS = COLS * ROWS;
const PROJECTS = Array.from({ length: TOTAL_SLOTS }, (_, i) =>
  REAL_PROJECTS[i]
    ? REAL_PROJECTS[i]
    : { id: `placeholder-${i}`, name: "Coming soon", icon: null, href: null, placeholder: true },
);

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

const ProjectIcon = ({ project, style }) => {
  const isClickable = Boolean(project.href);

  const content = (
    <>
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden border ${
          project.placeholder
            ? "bg-white bg-opacity-5 border-dashed border-white border-opacity-10"
            : "bg-slate-800 border-white border-opacity-10"
        }`}
      >
        {project.icon ? (
          <Image
            src={project.icon}
            width={64}
            height={64}
            alt=""
            className="w-full h-full object-cover"
            {...(project.iconProps || {})}
          />
        ) : (
          <span className="text-white text-opacity-20 text-3xl" aria-hidden="true">
            +
          </span>
        )}
      </div>
      <p
        className={`mt-1.5 text-xs text-center leading-tight w-full ${
          project.placeholder || !isClickable ? "text-white text-opacity-40" : "text-white"
        }`}
      >
        {project.name}
      </p>
    </>
  );

  const sharedStyle = { ...style, width: CELL_W };

  if (isClickable) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={playClick}
        style={sharedStyle}
        className="absolute flex flex-col items-center p-2 rounded-xl hover:bg-white hover:bg-opacity-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      style={sharedStyle}
      onPointerDown={(event) => event.stopPropagation()}
      className="absolute flex flex-col items-center p-2 cursor-default"
    >
      {content}
    </div>
  );
};

const ProjectsWindow = ({ isOpen, onClose }) => {
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWheel = (event) => {
    event.preventDefault();

    // Hold ctrl/cmd (the standard trackpad "pinch to zoom" modifier, and
    // ctrl+wheel on a mouse) to zoom; a plain scroll pans the grid instead.
    if (event.ctrlKey || event.metaKey) {
      const delta = -event.deltaY * 0.001;
      setTransform((t) => ({
        ...t,
        scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.scale + delta)),
      }));
      return;
    }

    setTransform((t) => ({
      ...t,
      x: wrap(t.x - event.deltaX, TILE_W),
      y: wrap(t.y - event.deltaY, TILE_H),
    }));
  };
  const zoomBy = (delta) => {
    setTransform((t) => ({
      ...t,
      scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.scale + delta)),
    }));
  };

  const tiles = [];
  const centerOffset = Math.floor(REPEAT / 2);
  for (let ty = 0; ty < REPEAT; ty++) {
    for (let tx = 0; tx < REPEAT; tx++) {
      const tileOriginX = (tx - centerOffset) * TILE_W;
      const tileOriginY = (ty - centerOffset) * TILE_H;
      PROJECTS.forEach((project, index) => {
        const col = index % COLS;
        const row = Math.floor(index / COLS);
        tiles.push(
          <ProjectIcon
            key={`${tx}-${ty}-${project.id}`}
            project={project}
            style={{
              left: tileOriginX + col * CELL_W,
              top: tileOriginY + row * CELL_H,
            }}
          />,
        );
      });
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950">
      <MacWindowChrome title="Projects" onClose={onClose} />
      <div
        className="relative flex-grow overflow-hidden touch-none select-none"
        onWheel={handleWheel}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          }}
        >
          {tiles}
        </div>

        <div className="absolute bottom-5 right-5 flex items-center gap-1 rounded-full bg-black bg-opacity-50 backdrop-blur-md p-1">
          <button
            type="button"
            aria-label="Zoom out"
            onClick={() => zoomBy(-0.2)}
            className="flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white hover:bg-opacity-10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FiMinus aria-hidden="true" />
          </button>
          <span className="text-white text-xs w-10 text-center tabular-nums">
            {Math.round(transform.scale * 100)}%
          </span>
          <button
            type="button"
            aria-label="Zoom in"
            onClick={() => zoomBy(0.2)}
            className="flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white hover:bg-opacity-10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FiPlus aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Reset view"
            onClick={() => setTransform({ x: 0, y: 0, scale: 1 })}
            className="flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white hover:bg-opacity-10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <BiReset aria-hidden="true" />
          </button>
        </div>

        <p className="absolute top-4 left-4 text-white text-opacity-40 text-xs">
          Scroll to pan · ⌘/Ctrl + scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default ProjectsWindow;
