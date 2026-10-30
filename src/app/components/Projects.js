import React, { useState } from "react";
import AnimatedItem from "./AnimatedItem";
import Modal from "./Modal";
import ProjectsCanvas from "./ProjectsCanvas";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

const canvasIconClasses =
  "absolute flex flex-col items-center gap-1 w-24 text-center bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-opacity-40 transition";

const CanvasProjectIcon = ({ x, y, image, imageProps, label, onClick }) => (
  <button
    type="button"
    style={{ left: x, top: y }}
    onPointerDown={(event) => event.stopPropagation()}
    onClick={onClick}
    className={canvasIconClasses}
  >
    <Image
      src={image}
      width={44}
      height={44}
      className="rounded-full"
      alt={`${label} app icon`}
      {...imageProps}
    />
    <p className="text-white text-xs leading-tight">{label}</p>
  </button>
);

const BackButton = ({ onClick }) => (
  <button
    type="button"
    aria-label="Back to projects list"
    className="text-white mb-4 text-lg rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    onClick={onClick}
  >
    <BsChevronLeft aria-hidden="true" />
  </button>
);

const Projects = ({ showModal, setShowModal }) => {
  const [aeolus, setAeolus] = useState(false);
  const [scam, setScam] = useState(false);
  const [track, setTrack] = useState(false);
  const [virtual, setVirtual] = useState(false);
  const [chatto, setChatto] = useState(false);
  const [heart, setHeart] = useState(false);
  const [qr, setQR] = useState(false);
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      className="w-[1000px] h-auto smbelow:h-[600px] smbelow:overflow-y-auto smbelow:mt-5 smbelow:w-[95%]"
    >
      {aeolus && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BackButton
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
              <BackButton
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
                  Built with Vanilla Javascript{" "}
                </p>
                <Link
                  href="https://mfon-todo-lists.netlify.app"
                  target="_blank"
                  className="text-gray-400 text-[12px] mb-5"
                >
                  To do list app
                </Link>

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
              <BackButton
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setTrack(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  Anime Show Tracker
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with Vue.Js, AnList API & Firebase{" "}
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About Anime Show Tracker
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  Anime Show Tracker is a powerful web app designed to help keep
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  track of Anime's you are currently watching and Anime's you
                  intend to keep watching
                </p>
              </div>
            </AnimatedItem>
          )}

          {virtual && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BackButton
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setVirtual(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  Learning Management system
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with Vue.Js, SASS.{" "}
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About Learning management system
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  This is a virtual learning management system developed for
                  secondary and tertiary institutions to help teachers and
                  students alike take tests assignments and quiz.{" "}
                </p>
                <div>
                  <ol className="text-white text-sm leading-6" typeof="list">
                    <li>
                      1. Designed and developed the architecture of the
                      web-based E-Learning management System.
                    </li>
                    <li>
                      2. Designed and built the frontend for both student and
                      teachers dashboards and screens.
                    </li>
                  </ol>
                </div>
              </div>
            </AnimatedItem>
          )}

          {chatto && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BackButton
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
              <BackButton
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setHeart(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  Disney plus clone (in progress)
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with React, Redux, & firebase
                </p>
                <Link
                  href="https://github.com/murphydhee/disney-plus-clone"
                  target="_blank"
                  className="text-gray-400 text-[12px] mb-5"
                >
                  A disney plus clone (repo)
                </Link>

                <h2 className="text-xl font-medium text-white mb-3">
                  About Disney plus clone
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  Being a fan of movies I decided to build a replica of one of
                  my favourite streaming services, it has not been completed yet
                  due to health reasons but ill update once i am done.
                </p>
              </div>
            </AnimatedItem>
          )}

          {qr && (
            <AnimatedItem animationConfig={{ delay: 0.1 }}>
              <BackButton
                onClick={() => {
                  const audio = new Audio("click.wav");
                  audio.play();
                  setQR(false);
                }}
              />
              <div className="flex flex-col w-full">
                <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                  QR Code attendance system
                </h1>
                <p className="text-white text-sm mb-5">
                  Built with React & Firebase
                </p>

                <h2 className="text-xl font-medium text-white mb-3">
                  About QR Code attendance system
                </h2>
                <p className="text-white text-sm mb-5 leading-6">
                  The QR Code Attendance System is a mobile application
                  developed using React and Firebase that simplifies the process
                  of tracking attendance for various events, classes, or
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
              <div className="flex flex-col w-full">
                <h1 className="text-4xl smbelow:text-2xl font-medium text-white border-b-2 pb-4 mb-4 border-gray-400 border-opacity-10 w-full">
                  Personal Projects
                </h1>
                <div className="w-full h-[460px] smbelow:h-[380px]">
                  <ProjectsCanvas>
                    <CanvasProjectIcon
                      x={40}
                      y={30}
                      image="/aeolus.png"
                      label="Aeolus"
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setAeolus(true);
                      }}
                    />
                    <CanvasProjectIcon
                      x={260}
                      y={90}
                      image="/list.svg"
                      imageProps={{ className: "rounded-full bg-white p-2" }}
                      label="To Do List"
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setScam(true);
                      }}
                    />
                    <CanvasProjectIcon
                      x={480}
                      y={30}
                      image="/eyes.gif"
                      imageProps={{ unoptimized: true }}
                      label="Anime Show Tracker"
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setTrack(true);
                      }}
                    />
                    <CanvasProjectIcon
                      x={700}
                      y={110}
                      image="/learn.svg"
                      label="Learning management system"
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setVirtual(true);
                      }}
                    />
                    <CanvasProjectIcon
                      x={150}
                      y={250}
                      image="/chatto.png"
                      label="Chatto"
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setChatto(true);
                      }}
                    />
                    <CanvasProjectIcon
                      x={400}
                      y={290}
                      image="/disney.png"
                      label="Disney plus Clone"
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setHeart(true);
                      }}
                    />
                    <CanvasProjectIcon
                      x={630}
                      y={260}
                      image="/qr.png"
                      imageProps={{ className: "rounded-lg" }}
                      label="QR Code attendance system"
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setQR(true);
                      }}
                    />
                  </ProjectsCanvas>
                </div>
              </div>
            )}
    </Modal>
  );
};

export default Projects;
