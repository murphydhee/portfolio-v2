"use client";
import React, { useState, useEffect } from "react";
import DesktopItems from "../components/DesktopItems";
import Game from "../components/Game";
import Education from "../components/Education";
import Impact from "../components/Impact";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Menu from "../components/Menu";
import TaskbarDock from "../components/TaskbarDock";

const Page = () => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [visitorName, setVisitorName] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [experience, setexperience] = useState(false);
  const [impact, setImpact] = useState(false);
  const [education, setEducation] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [screen, screenSet] = useState(false);
  const [click, isClick] = useState(false);
  const [info, setInfo] = useState(false);
  const [game, setGame] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setVisitorName(storedName);
  }, []);

  return (
    <main
      className="flex fixed inset-0 flex-col w-full h-full items-center justify-center bg-slate-950 homepage font-Rubik font-light"
      pointerEvents="auto"
    >
      {visitorName && !isStartMenuOpen && (
        <p className="absolute top-4 right-4 text-white text-sm bg-black bg-opacity-30 backdrop-blur-md px-3 py-1 rounded-full z-10">
          Welcome back, {visitorName} 👋
        </p>
      )}
      <DesktopItems
        isStartMenuOpen={isStartMenuOpen}
        setShowModal={setShowModal}
        setGame={setGame}
      />
      <Game game={game} setGame={setGame} />
      <Education education={education} setEducation={setEducation} />
      <Impact impact={impact} setImpact={setImpact} />
      <Experience experience={experience} setexperience={setexperience} />
      <Projects showModal={showModal} setShowModal={setShowModal} />
      <Menu
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
        screen={screen}
        setEducation={setEducation}
        setexperience={setexperience}
        setImpact={setImpact}
        setInfo={setInfo}
        info={info}
      />
      <TaskbarDock
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
        screenWidth={screenWidth}
        click={click}
        isClick={isClick}
        screenSet={screenSet}
        setShowModal={setShowModal}
      />
    </main>
  );
};

export default Page;
