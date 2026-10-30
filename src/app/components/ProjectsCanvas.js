"use client";
import React, { useRef, useState } from "react";
import { BiReset } from "react-icons/bi";
import { FiPlus, FiMinus } from "react-icons/fi";

const MIN_SCALE = 0.5;
const MAX_SCALE = 2;
const DEFAULT_TRANSFORM = { x: 0, y: 0, scale: 1 };

// A hand-rolled pan/zoom canvas (Figma-style): fully controlled transform
// state rather than framer-motion's uncontrolled `drag`, so "reset view"
// can't desync from what's actually on screen. Project icons stop pointer
// propagation so clicking one doesn't also start a pan.
const ProjectsCanvas = ({ children }) => {
  const [transform, setTransform] = useState(DEFAULT_TRANSFORM);
  const isPanning = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });

  const handlePointerDown = (event) => {
    isPanning.current = true;
    lastPoint.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerMove = (event) => {
    if (!isPanning.current) return;
    const dx = event.clientX - lastPoint.current.x;
    const dy = event.clientY - lastPoint.current.y;
    lastPoint.current = { x: event.clientX, y: event.clientY };
    setTransform((t) => ({ ...t, x: t.x + dx, y: t.y + dy }));
  };

  const stopPanning = () => {
    isPanning.current = false;
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const delta = -event.deltaY * 0.001;
    setTransform((t) => ({
      ...t,
      scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.scale + delta)),
    }));
  };

  const zoomBy = (delta) => {
    setTransform((t) => ({
      ...t,
      scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.scale + delta)),
    }));
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-lg bg-black bg-opacity-20 touch-none select-none cursor-grab active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopPanning}
      onPointerLeave={stopPanning}
      onWheel={handleWheel}
    >
      <div
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transformOrigin: "0 0",
        }}
        className="absolute inset-0"
      >
        {children}
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black bg-opacity-50 backdrop-blur-md p-1">
        <button
          type="button"
          aria-label="Zoom out"
          onClick={() => zoomBy(-0.2)}
          className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-white hover:bg-opacity-10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
          className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-white hover:bg-opacity-10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <FiPlus aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Reset view"
          onClick={() => setTransform(DEFAULT_TRANSFORM)}
          className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-white hover:bg-opacity-10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <BiReset aria-hidden="true" />
        </button>
      </div>

      <p className="absolute top-3 left-3 text-white text-opacity-50 text-xs">
        Drag to pan · scroll to zoom
      </p>
    </div>
  );
};

export default ProjectsCanvas;
