"use client";
import React, { useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, className = "", children }) => {
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-slate-900 bg-opacity-70 backdrop-blur-3xl border border-gray-400 border-opacity-10 p-1 rounded-lg shadow-xl ${className}`}
      >
        <div className="flex">
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            tabIndex={isOpen ? 0 : -1}
            className="text-white text-4xl ml-auto p-1 hover:bg-red-600 rounded-tr-md rounded-br-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              onClose();
            }}
          >
            <MdOutlineClose aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col items-start justify-start p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
