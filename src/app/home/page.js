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
import StatusBar from "../components/StatusBar";
import DesktopPet from "../components/DesktopPet";
import PetPicker from "../components/PetPicker";

const Page = () => {
  const [visitorName, setVisitorName] = useState("");
  const [petId, setPetId] = useState(null);
  const [isPetPickerOpen, setIsPetPickerOpen] = useState(false);

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
    const storedName = localStorage.getItem("name");
    if (storedName) setVisitorName(storedName);

    const storedPet = localStorage.getItem("pet");
    if (storedPet) setPetId(storedPet);
  }, []);

  const handleSelectPet = (id) => {
    setPetId(id);
    if (id) {
      localStorage.setItem("pet", id);
    } else {
      localStorage.removeItem("pet");
    }
    setIsPetPickerOpen(false);
  };

  return (
    <main
      className="flex fixed inset-0 flex-col w-full h-full items-center justify-center bg-slate-950 homepage font-Rubik font-light"
      pointerEvents="auto"
    >
      {!isStartMenuOpen && (
        <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
          {visitorName && (
            <p className="text-white text-sm bg-black bg-opacity-30 backdrop-blur-md px-3 py-1 rounded-full">
              Welcome back, {visitorName} 👋
            </p>
          )}
          <StatusBar />
        </div>
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
      <DesktopPet petId={petId} />
      <PetPicker
        isOpen={isPetPickerOpen}
        onClose={() => setIsPetPickerOpen(false)}
        selectedPet={petId}
        onSelect={handleSelectPet}
      />
      <Menu
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
        screen={screen}
        setEducation={setEducation}
        setexperience={setexperience}
        setImpact={setImpact}
        setInfo={setInfo}
        info={info}
        setPetPickerOpen={setIsPetPickerOpen}
      />
      <TaskbarDock
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
        click={click}
        isClick={isClick}
        screenSet={screenSet}
        setShowModal={setShowModal}
      />
    </main>
  );
};

export default Page;
