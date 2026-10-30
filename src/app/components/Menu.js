import React from "react";
import { FcBullish } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { BiSolidFilePdf } from "react-icons/bi";
import { FcCollaboration } from "react-icons/fc";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { FcFolder } from "react-icons/fc";
import { GiPawPrint } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const Menu = ({
  isStartMenuOpen,
  setShowModal,
  screen,
  setexperience,
  setImpact,
  setEducation,
  setInfo,
  info,
  setPetPickerOpen,
}) => {
  return (
    <div
      className={
        isStartMenuOpen
          ? "flex flex-col items-center justify-center flex-grow bg-slate-900 bg-opacity-30 w-full"
          : "flex flex-col items-center justify-center flex-grow"
      }
    >
      {isStartMenuOpen && screen && (
        <div className="flex flex-col mt-auto mb-24 bg-slate-900 bg-opacity-70 backdrop-blur-lg border border-gray-400 border-opacity-10 text-white rounded-2xl text-[13px] w-[450px] h-auto text-center smbelow:w-[95%]">
          <div className="flex space-x-8 items-center justify-center smbelow:flex-wrap smbelow:item-start smbelow:space-x-2 smbelow:justify-evenly  p-5 ">
            {/*<div*/}
            {/*  className="flex flex-col items-center justify-center cursor-pointer"*/}
            {/*  onClick={() => {*/}
            {/*    const audio = new Audio("click.wav");*/}
            {/*    audio.play();*/}
            {/*    setShowModal(true);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <FcFolder className="text-5xl smbelow:text-4xl" />*/}
            {/*  <p className="text-center smbelow:hidden">Projects</p>*/}
            {/*</div>*/}
            <Link
              href="https://docs.google.com/document/d/1KOvz-VVwrqxER2cPQxNk5z1gsDOi0WrXTLU2fZA3amE/edit?usp=sharing"
              target="_blank"
              aria-label="Open resume (opens in a new tab)"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
              }}
              className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <div className="flex flex-col items-center justify-center">
                <BiSolidFilePdf
                  className="text-5xl text-red-600 smbelow:text-4xl"
                  aria-hidden="true"
                />
                <p className="text-center smbelow:hidden">Resume</p>
              </div>
            </Link>
            <button
              type="button"
              className="flex flex-col items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setexperience(true);
              }}
            >
              <FcCollaboration
                className="text-5xl smbelow:text-4xl"
                aria-hidden="true"
              />
              <p className="text-center smbelow:hidden">Experience</p>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setImpact(true);
              }}
            >
              <FcBullish
                className="text-5xl smbelow:text-4xl"
                aria-hidden="true"
              />
              <p className="text-center smbelow:hidden">Impact</p>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setEducation(true);
              }}
            >
              <FcGraduationCap
                className="text-5xl smbelow:text-4xl"
                aria-hidden="true"
              />
              <p className="text-center smbelow:hidden">Education</p>
            </button>
            <button
              type="button"
              className="flex flex-col items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setPetPickerOpen(true);
              }}
            >
              <GiPawPrint
                className="text-5xl text-amber-400 smbelow:text-4xl"
                aria-hidden="true"
              />
              <p className="text-center smbelow:hidden">Pet</p>
            </button>
          </div>

          {info && (
            <div className="flex flex-col items-start justify-start p-5">
              <div className="flex items-start justify-start gap-[136px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                <p>Name:</p>
                <p>Mfon Ekwere</p>
              </div>
              <hr></hr>
              <div className="flex items-start justify-start gap-[140px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                <p>Email:</p>
                <p className="smbelow:truncate">murphydhee@gmail.com</p>
              </div>
              <div className="flex items-start justify-start gap-[80px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                <p>Phone Number:</p>
                <p>+234 810 0361 121</p>
              </div>
              <div className="flex items-start justify-start gap-[103px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                <p>Experience:</p>
                <p>3 years</p>
              </div>
              <div className="flex items-start justify-start gap-[140px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                <p>Skills:</p>
                <p className="text-left">
                  VueJS, Next JS, HTML, CSS, NUXT JS, Wordpress, UI/UX, React,
                  NodeJS (learning), SCSS,Technical Writing.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center  bg-black mt-auto w-full bg-opacity-20 rounded-b-2xl p-3 space-x-3">
            <Image
              src="/male.svg"
              width={40}
              height={40}
              className=""
              alt="my emoji"
            />
            <div className="flex flex-col justify-start items-start flex-grow">
              <p className="text-white text-[14px]">Mfon Ekwere</p>
              <p className="text-white text-[11px]">Frontend Developer</p>
            </div>
            <div className="ml-auto">
              <button
                type="button"
                aria-expanded={info}
                aria-label={info ? "Hide contact info" : "Show contact info"}
                className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setInfo(!info);
                }}
              >
                {info ? (
                  <BiChevronDown className="text-3xl" aria-hidden="true" />
                ) : (
                  <BiChevronUp className="text-3xl" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
