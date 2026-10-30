"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { readStoredPositions, writeStoredPosition } from "./iconPositions";

// A desktop icon that can be dragged anywhere within containerRef's bounds
// (pointer/desktop only — draggable is false on touch viewports, see
// useIsDesktopViewport) and remembers where it was dropped, the same way
// the visitor's name and pet choice persist.
const DraggableIcon = ({
  id,
  defaultPosition,
  containerRef,
  draggable,
  onActivate,
  label,
  className,
  children,
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const wasDragged = useRef(false);

  useEffect(() => {
    const stored = readStoredPositions()[id];
    if (stored) setPosition(stored);
  }, [id]);

  return (
    <motion.button
      type="button"
      drag={draggable}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={containerRef}
      style={{ position: "absolute", top: 0, left: 0, x: position.x, y: position.y }}
      onDragStart={() => {
        wasDragged.current = true;
      }}
      onDragEnd={(event, info) => {
        const next = {
          x: Math.round(position.x + info.offset.x),
          y: Math.round(position.y + info.offset.y),
        };
        setPosition(next);
        writeStoredPosition(id, next);
        // Swallow the click framer-motion fires right after a real drag,
        // so dropping an icon doesn't also open it.
        setTimeout(() => {
          wasDragged.current = false;
        }, 0);
      }}
      onClick={() => {
        if (wasDragged.current) return;
        onActivate();
      }}
      aria-label={label}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default DraggableIcon;
