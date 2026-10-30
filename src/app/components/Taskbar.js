import React, { useState, useEffect } from "react";
import { MdWindow } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";
import Link from "next/link";

const Taskbar = ({
  screenWidth,
  isStartMenuOpen,
  setIsStartMenuOpen,
  click,
  isClick,
  screenSet,
  setShowModal,
  screen,
}) => {
  const [isStartMenuHovered, setIsStartMenuHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isArticlesHovered, setisArticlesHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return (
    <div className="flex items-center justify-center p-3 backdrop-blur-3xl space-x-6 w-screen">
      {screenWidth >= parseInt(639) && (
        <div className="basis-2/12 flex space-x-3">
          <BsFillCloudFill className="text-4xl text-blue-500" />
          <div className="flex flex-col">
            <p className="text-white font-Rubik font-light">
              27<sup>°</sup>C
            </p>
            <p className="text-white text-[13px] font-Rubik font-light">
              Cloudy
            </p>
          </div>
        </div>
      )}

      <div className="basis-8/12 flex items-center justify-center space-x-5 ">
        <button
          type="button"
          aria-label="Start menu"
          aria-expanded={isStartMenuOpen}
          className={
            isStartMenuOpen
              ? "p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              : "p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          }
          onMouseEnter={() => setIsStartMenuHovered(true)}
          onMouseLeave={() => setIsStartMenuHovered(false)}
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            isClick(!click);
            screenSet(!screen);
            setIsStartMenuOpen(!isStartMenuOpen);
          }}
        >
          <MdWindow className="text-4xl text-blue-500" aria-hidden="true" />

          {isStartMenuHovered && !isStartMenuOpen && (
            <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
              Start Menu
            </span>
          )}
        </button>
        <button
          type="button"
          aria-label="Open projects"
          className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onMouseEnter={() => setIsProjectsHovered(true)}
          onMouseLeave={() => setIsProjectsHovered(false)}
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            setShowModal(true);
          }}
        >
          <FcFolder className="text-4xl" aria-hidden="true" />
          {isProjectsHovered && (
            <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
              Projects
            </span>
          )}
        </button>
        <Link
          href="https://github.com/murphydhee"
          aria-label="GitHub profile (opens in a new tab)"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
          }}
          target="_blank"
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <div
            className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg "
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
          >
            <VscGithubInverted
              className="text-[33px] text-gray-400"
              aria-hidden="true"
            />
            {isGithubHovered && (
              <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                Github
              </span>
            )}
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mfon-ekwere/"
          target="_blank"
          aria-label="LinkedIn profile (opens in a new tab)"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
          }}
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <div
            className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg "
            onMouseEnter={() => setIsLinkedInHovered(true)}
            onMouseLeave={() => setIsLinkedInHovered(false)}
          >
            <AiFillLinkedin
              className="text-[40px] text-[#0A66C2]"
              aria-hidden="true"
            />
            {isLinkedInHovered && (
              <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                LinkedIn
              </span>
            )}
          </div>
        </Link>
        <Link
          href="https://murphydhee.hashnode.dev/"
          target="_blank"
          aria-label="Articles (opens in a new tab)"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
          }}
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <div
            className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:backdrop-blur-lg "
            onMouseEnter={() => setisArticlesHovered(true)}
            onMouseLeave={() => setisArticlesHovered(false)}
          >
            <FaStickyNote
              className="text-[36px] text-[#00acee]"
              aria-hidden="true"
            />
            {isArticlesHovered && (
              <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                Articles
              </span>
            )}
          </div>
        </Link>
      </div>
      <div className="lg:basis-2/12 lg:flex md:basis-2/12 md:flex smbelow:hidden">
        <div className="flex flex-col items-end w-full">
          <p className="text-white font-Rubik font-light">{formattedTime}</p>
          <p className="text-white text-[13px] font-Rubik font-light">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
