"use client";
import React from "react";

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

// macOS-style traffic lights for a full-screen "app window". Red closes,
// yellow minimizes (same close action here — there's no window-management
// layer to restore a minimized window to), green is just the familiar
// third dot since the window is already fullscreen.
const MacWindowChrome = ({ title, onClose, onMinimize }) => (
  <div className="relative flex items-center gap-2 px-4 py-3 bg-slate-900 bg-opacity-80 border-b border-white border-opacity-10 flex-shrink-0">
    <button
      type="button"
      aria-label="Close"
      onClick={() => {
        playClick();
        onClose();
      }}
      className="w-3.5 h-3.5 rounded-full bg-red-500 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    />
    <button
      type="button"
      aria-label="Minimize"
      onClick={() => {
        playClick();
        (onMinimize || onClose)();
      }}
      className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    />
    <span
      aria-hidden="true"
      title="Fullscreen"
      className="w-3.5 h-3.5 rounded-full bg-green-500 opacity-60"
    />
    {title && (
      <p className="absolute inset-x-0 text-center text-white text-sm font-medium pointer-events-none">
        {title}
      </p>
    )}
  </div>
);

export default MacWindowChrome;
