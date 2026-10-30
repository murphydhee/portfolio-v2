import React from "react";
import { MdWindow } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

const playClick = () => {
  const audio = new Audio("click.wav");
  audio.play();
};

const iconButtonClasses =
  "flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-150 ease-out hover:scale-125 hover:-translate-y-1 focus-visible:scale-125 focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const DockTooltip = ({ children }) => (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-90 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[12px] text-white opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
  >
    {children}
  </span>
);

const Taskbar = ({
  isStartMenuOpen,
  setIsStartMenuOpen,
  click,
  isClick,
  screenSet,
  setShowModal,
  screen,
  setGithubOpen,
  setArticlesOpen,
  setYoutubeOpen,
}) => {
  return (
    <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2 shadow-2xl backdrop-blur-2xl mb-2">
      <div className="group relative">
        <button
          type="button"
          aria-label="Start menu"
          aria-expanded={isStartMenuOpen}
          className={`${iconButtonClasses} ${isStartMenuOpen ? "bg-white bg-opacity-15" : ""}`}
          onClick={() => {
            playClick();
            isClick(!click);
            screenSet(!screen);
            setIsStartMenuOpen(!isStartMenuOpen);
          }}
        >
          <MdWindow className="text-3xl text-blue-400" aria-hidden="true" />
        </button>
        <DockTooltip>Start Menu</DockTooltip>
      </div>

      <div className="group relative">
        <button
          type="button"
          aria-label="Open projects"
          className={iconButtonClasses}
          onClick={() => {
            playClick();
            setShowModal(true);
          }}
        >
          <FcFolder className="text-3xl" aria-hidden="true" />
        </button>
        <DockTooltip>Projects</DockTooltip>
      </div>

      <div className="mx-1 h-10 w-px self-center bg-white bg-opacity-10" aria-hidden="true" />

      <div className="group relative">
        <button
          type="button"
          aria-label="GitHub activity"
          className={iconButtonClasses}
          onClick={() => {
            playClick();
            setGithubOpen(true);
          }}
        >
          <VscGithubInverted className="text-2xl text-gray-300" aria-hidden="true" />
        </button>
        <DockTooltip>GitHub</DockTooltip>
      </div>

      <div className="group relative">
        <Link
          href="https://www.linkedin.com/in/mfon-ekwere/"
          target="_blank"
          aria-label="LinkedIn profile (opens in a new tab)"
          onClick={playClick}
          className={iconButtonClasses}
        >
          <AiFillLinkedin className="text-3xl text-[#0A66C2]" aria-hidden="true" />
        </Link>
        <DockTooltip>LinkedIn</DockTooltip>
      </div>

      <div className="group relative">
        <button
          type="button"
          aria-label="Articles"
          className={iconButtonClasses}
          onClick={() => {
            playClick();
            setArticlesOpen(true);
          }}
        >
          <FaStickyNote className="text-2xl text-[#00acee]" aria-hidden="true" />
        </button>
        <DockTooltip>Articles</DockTooltip>
      </div>

      <div className="group relative">
        <button
          type="button"
          aria-label="YouTube"
          className={iconButtonClasses}
          onClick={() => {
            playClick();
            setYoutubeOpen(true);
          }}
        >
          <BsYoutube className="text-2xl text-[#FF0000]" aria-hidden="true" />
        </button>
        <DockTooltip>YouTube</DockTooltip>
      </div>
    </div>
  );
};

export default Taskbar;
