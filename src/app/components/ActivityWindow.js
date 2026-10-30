"use client";
import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import { BiLoaderAlt } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

// Shared "live widget" window: a list of clickable items that route out to
// their real source, plus a footer link to the full profile/feed. Used by
// the GitHub, Articles, and YouTube widgets — same shape, same loading/
// error states, different data.
const ActivityWindow = ({
  isOpen,
  onClose,
  title,
  status,
  items,
  footerLink,
  emptyMessage = "Nothing to show right now.",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[560px] smbelow:w-[95%]">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
          {title}
        </h1>

        {status === "loading" && (
          <div className="flex items-center gap-2 text-white text-sm py-6">
            <BiLoaderAlt className="animate-spin text-xl" aria-hidden="true" />
            Loading…
          </div>
        )}

        {status === "error" && (
          <p className="text-white text-sm py-6">
            Couldn&apos;t load this right now — try again in a bit, or use
            the link below.
          </p>
        )}

        {status === "ready" && items.length === 0 && (
          <p className="text-white text-sm py-6">{emptyMessage}</p>
        )}

        {status === "ready" && items.length > 0 && (
          <ul className="flex flex-col gap-2 w-full">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-3 rounded-xl border border-gray-400 border-opacity-10 bg-black bg-opacity-20 hover:bg-opacity-30 transition p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.thumbnail && (
                    <Image
                      src={item.thumbnail}
                      width={64}
                      height={64}
                      unoptimized
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex flex-col min-w-0 flex-grow">
                    <p className="text-white text-sm font-medium truncate">
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="text-gray-300 text-xs truncate">
                        {item.subtitle}
                      </p>
                    )}
                    {item.meta && (
                      <p className="text-gray-400 text-[11px] mt-1">
                        {item.meta}
                      </p>
                    )}
                  </div>
                  <BsArrowUpRight
                    className="text-white text-opacity-50 flex-shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}

        {footerLink && (
          <a
            href={footerLink.href}
            target="_blank"
            rel="noreferrer"
            onClick={playClick}
            className="mt-5 self-start inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
          >
            {footerLink.label}
            <BsArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </Modal>
  );
};

export default ActivityWindow;
