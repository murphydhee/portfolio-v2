"use client";
import React from "react";
import PetSprite from "./PetSprite";
import { getPetById } from "./pets";

const DesktopPet = ({ petId }) => {
  const pet = getPetById(petId);
  if (!pet) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-28 left-6 z-10 w-20 h-20 select-none"
      aria-hidden="true"
    >
      <PetSprite {...pet} />
    </div>
  );
};

export default DesktopPet;
