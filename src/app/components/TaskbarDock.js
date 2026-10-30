"use client";
import React, { useState } from "react";
import { motion as m } from "framer-motion";
import Taskbar from "./Taskbar";

// A macOS-dock-style auto-hiding taskbar: stays tucked below the viewport
// edge and slides into view on hover near the bottom, on keyboard focus of
// anything inside it, or while the Start Menu is open.
const TaskbarDock = ({ isStartMenuOpen, ...taskbarProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isVisible = isHovered || isFocused || isStartMenuOpen;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 h-24 flex items-end justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <m.div
        aria-hidden="true"
        animate={{ opacity: isVisible ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-1 h-1 w-16 rounded-full bg-white bg-opacity-40"
      />
      <m.div
        animate={{ y: isVisible ? "0%" : "100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Taskbar isStartMenuOpen={isStartMenuOpen} {...taskbarProps} />
      </m.div>
    </div>
  );
};

export default TaskbarDock;
