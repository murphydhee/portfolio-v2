import React, { useState } from "react";
import AnimatedItem from "./AnimatedItem";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

const Projects = ({ showModal, setShowModal }) => {
  const [aeolus, setAeolus] = useState(false);
  const [scam, setScam] = useState(false);
  const [track, setTrack] = useState(false);
  const [virtual, setVirtual] = useState(false);
  const [chatto, setChatto] = useState(false);
  const [heart, setHeart] = useState(false);
  const [qr, setQR] = useState(false);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
        showModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-opacity-100 backdrop-blur-3xl border border-gray-400  w-[1000px]  smbelow:h-[600px]  smbelow:overflow-y-auto smbelow:mt-5 h-auto p-1 rounded-lg shadow-xl  border-opacity-10 ">
        <div className="flex">
          <MdOutlineClose
            className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              setShowModal(false);
            }}
          />
        </div>

        <div className="flex flex-col items-start justify-start p-5">
          {aeolus && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BsChevronLeft
                className="text-white mb-4 text-lg cursor-pointer"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setAeolus(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  AEOLUS
                </h1>
                <p className="text-white text-sm">
                  Built with HTML/CSS, Javascript{" "}
                </p>
                <Link
                  href="https://aeolus-weather.vercel.app/"
                  target="_blank"
                  className="text-gray-400 text-[12px] mb-5"
                >
                  aeolus-weather.vercel.app
                </Link>
                <h2 className="text-xl font-medium text-white mb-3">
                  About AEOLUS
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  This is not your ordinary weather app, it has real-time data
                  and prediction fo up to 7 days.
                </p>

                <div>
                  <ol className="text-white text-sm leading-6" typeof="list">
                    <li>
                      1. The app also provides a search feature that allows
                      users to check for the weather conditions for various
                      cities.
                    </li>
                    <li>
                      2. The app allows you save locations so you can always
                      keep track of your favourite locations.{" "}
                    </li>
                  </ol>
                </div>
              </div>
            </AnimatedItem>
          )}

          {scam && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BsChevronLeft
                className="text-white mb-4 text-lg cursor-pointer"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setScam(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  To Do List
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with Javascript{" "}
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About TO DO List
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  This is a Simple To Do List, build to help me handle tasks
                </p>
              </div>
            </AnimatedItem>
          )}

          {track && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BsChevronLeft
                className="text-white mb-4 text-lg cursor-pointer"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setTrack(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  Track it
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with Flutter, Google Maps API & Firebase{" "}
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About Track it
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  Track It is a powerful mobile app designed to protect your
                  smartphone and enhance your peace of mind. With features like
                  IMEI verification, stolen phone reporting, and live location
                  tracking, Track It empowers you to safeguard your device and
                  recover it in case of loss or theft.
                </p>
              </div>
            </AnimatedItem>
          )}

          {virtual && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BsChevronLeft
                className="text-white mb-4 text-lg cursor-pointer"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setVirtual(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  Virtual E-Learning system
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with NodeJS, ExpressJS, Socket.io, MongoDB & Bootstrap{" "}
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About Virtual E-Learning system
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  This is a virtual e-learning system developed for NILEST. It
                  allows lecturers host lectures online and also allow students
                  to join virtually {"("}Just like Zoom & Google Meet
                  {")"}
                </p>
                <div>
                  <ol className="text-white text-sm leading-6" typeof="list">
                    <li>
                      1. Designed and developed the architecture of the
                      web-based Virtual E-Learning System for NILEST.
                    </li>
                    <li>
                      2. Implemented Socket.io for real-time video conferencing
                      and communication in virtual classrooms.
                    </li>
                    <li>
                      3. Integrated MongoDB for secure and efficient storage of
                      user data.
                    </li>
                  </ol>
                </div>
              </div>
            </AnimatedItem>
          )}

          {chatto && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BsChevronLeft
                className="text-white mb-4 text-lg cursor-pointer"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setChatto(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  Chatto
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with Vue.Js & Chat-Engine.io
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About Chatto
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  A mini project that is built using a real-time chat app using
                  Vue.js and ChatEngine.io.
                </p>
              </div>
            </AnimatedItem>
          )}

          {heart && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BsChevronLeft
                className="text-white mb-4 text-lg cursor-pointer"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setHeart(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  Expert System for Diagnosing Heart Disease
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with Flutter, Node JS, MongoDB & Bootstrap
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About Expert System
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  The Expert system was developed for Diagnosing Heart Disease
                  using a standard rule base. I implemented user-friendly web
                  and mobile interfaces for easy access to the system. I also
                  designed and developed the system architecture, including the
                  rule base and decision tree algorithm for accurate diagnosis
                  of heart disease.
                </p>
              </div>
            </AnimatedItem>
          )}

          {qr && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BsChevronLeft
                className="text-white mb-4 text-lg cursor-pointer"
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setQR(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  QR Code attenance system
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with Flutter & Firebase
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About QR Code attenance system
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  The QR Code Attendance System is a mobile application
                  developed using Flutter and Firebase that simplifies the
                  process of tracking attendance for various events, classes, or
                  meetings. This modern solution replaces the traditional
                  paper-based attendance sheet with an efficient digital system.
                </p>
              </div>
            </AnimatedItem>
          )}

          {!aeolus &&
            !scam &&
            !track &&
            !virtual &&
            !chatto &&
            !heart &&
            !qr && (
              <div className="flex flex-col w-full ">
                <h1 className="text-4xl smbelow:text-2xl font-medium text-white border-b-2 pb-4 border-gray-400 border-opacity-10 w-full">
                  Personal Projects
                </h1>
                <div className="flex mt-5 w-full smbelow:flex-col gap-2 ">
                  <div
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setAeolus(true);
                    }}
                    className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                  >
                    <div className="flex gap-3">
                      <Image
                        src="/aeolus.png"
                        width={70}
                        height={70}
                        className="rounded-full"
                        alt="Aeoulus"
                      />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">Aeolus</p>
                        <p className="text-white text-base">Weather app</p>
                        <p className="text-white text-[10px]">
                          HTML, CSS, Javascript.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setScam(true);
                    }}
                    className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                  >
                    <div className="flex gap-3">
                      <Image
                        src="/scam.png"
                        width={50}
                        height={5}
                        alt="scam logo"
                      />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">Scam Shield</p>
                        <p className="text-white text-base">Mobile App</p>
                        <p className="text-white text-[10px]">
                          Flutter & Firebase
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setTrack(true);
                    }}
                    className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                  >
                    <div className="flex gap-3">
                      <Image src="/track.png" width={70} height={5} alt="" />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">Track it</p>
                        <p className="text-white text-base">Mobile App</p>
                        <p className="text-white text-[10px]">
                          Flutter, Google Maps API & Firebase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex mt-5 w-full smbelow:flex-col gap-2">
                  <div
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setVirtual(true);
                    }}
                    className="basis-4/12 flex flex-col cursor-pointer  bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                  >
                    <div className="flex gap-3">
                      <Image
                        src="/nilest.svg"
                        width={70}
                        height={30}
                        className="rounded-full"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">Virtual E-Learning</p>
                        <p className="text-white text-base">Website</p>
                        <p className="text-white text-[10px]">
                          Node, Express, Socket.io & MongoDB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setChatto(true);
                    }}
                    className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                  >
                    <div className="flex gap-3">
                      <Image
                        src="/chatto.png"
                        width={65}
                        height={40}
                        alt=""
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">Chatto </p>
                        <p className="text-white text-base">
                          A Chat application using vue.js and ChatEngine.io
                        </p>
                        <p className="text-white text-[10px]">
                          Vue.Js & ChatEngine.io
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setHeart(true);
                    }}
                    className="basis-4/12 cursor-pointer flex flex-col bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                  >
                    <div className="flex gap-3">
                      <Image
                        src="/disney.png"
                        width={70}
                        height={5}
                        className="rounded-full"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">Disney plus Clone</p>
                        <p className="text-white text-base">Web App</p>
                        <p className="text-white text-[10px]">
                          React.JS, Redux & Firebase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex mt-5 w-full gap-2">
                  <div
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setQR(true);
                    }}
                    className="w-full flex flex-col  cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                  >
                    <div className="flex gap-3">
                      <Image
                        src="/qr.png"
                        width={70}
                        height={30}
                        className="rounded-lg"
                        alt="QR image"
                      />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">
                          QR Code attendance system
                        </p>
                        <p className="text-white text-base">Web App</p>
                        <p className="text-white text-[10px]">
                          React.JS & Firebase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
