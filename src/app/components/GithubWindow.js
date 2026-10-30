"use client";
import React from "react";
import Modal from "./Modal";
import useGithubRepos from "./useGithubRepos";
import { BsArrowUpRight } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

const GITHUB_USERNAME = "murphydhee";

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

const GithubWindow = ({ isOpen, onClose }) => {
  const { status, repos } = useGithubRepos();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[820px] smbelow:w-[95%]">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
          GitHub Activity
        </h1>

        {/* Real contribution calendar for the account, same graph shown on
            the public GitHub profile — rendered by ghchart.rshah.org from
            GitHub's own public contribution data, no auth required. */}
        <div className="w-full overflow-x-auto rounded-lg bg-black bg-opacity-30 p-3 mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/40c463/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
            className="min-w-[760px]"
          />
        </div>

        <h2 className="text-lg font-medium text-white mb-3">
          Recently pushed
        </h2>

        {status === "loading" && (
          <div className="flex items-center gap-2 text-white text-sm py-4">
            <BiLoaderAlt className="animate-spin text-xl" aria-hidden="true" />
            Loading…
          </div>
        )}

        {status === "error" && (
          <p className="text-white text-sm py-4">
            Couldn&apos;t load recent repos right now — use the link below.
          </p>
        )}

        {status === "ready" && (
          <ul className="flex flex-col gap-2 w-full">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-3 rounded-xl border border-gray-400 border-opacity-10 bg-black bg-opacity-20 hover:bg-opacity-30 transition p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <div className="flex flex-col min-w-0 flex-grow">
                    <p className="text-white text-sm font-medium truncate">
                      {repo.title}
                    </p>
                    <p className="text-gray-300 text-xs truncate">
                      {repo.subtitle}
                    </p>
                    <p className="text-gray-400 text-[11px] mt-1">
                      {repo.meta}
                    </p>
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

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          onClick={playClick}
          className="mt-5 self-start inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
        >
          View full profile on GitHub
          <BsArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </Modal>
  );
};

export default GithubWindow;
