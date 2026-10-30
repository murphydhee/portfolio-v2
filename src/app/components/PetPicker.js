"use client";
import React from "react";
import Modal from "./Modal";
import PetSprite from "./PetSprite";
import { PETS } from "./pets";

const optionClasses = (isSelected) =>
  `flex flex-col items-center gap-2 rounded-xl border-2 p-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
    isSelected
      ? "border-white bg-white bg-opacity-10"
      : "border-gray-400 border-opacity-10 bg-black bg-opacity-20 hover:bg-opacity-30"
  }`;

const PetPicker = ({ isOpen, onClose, selectedPet, onSelect }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[480px] smbelow:w-[95%]">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
          Choose a desktop pet
        </h1>
        <p className="text-white text-sm mb-5">
          Pick a little companion to keep you company on the desktop.
          It&apos;s remembered next time you visit.
        </p>
        <div className="grid grid-cols-3 gap-3 w-full smbelow:grid-cols-2">
          <button
            type="button"
            onClick={() => onSelect(null)}
            className={optionClasses(!selectedPet)}
          >
            <span className="w-14 h-14 flex items-center justify-center text-white text-2xl">
              None
            </span>
            <span className="text-white text-sm">No pet</span>
          </button>
          {PETS.map((pet) => (
            <button
              key={pet.id}
              type="button"
              onClick={() => onSelect(pet.id)}
              className={optionClasses(selectedPet === pet.id)}
            >
              <span className="w-14 h-14 block">
                <PetSprite {...pet} bob={false} />
              </span>
              <span className="text-white text-sm">{pet.label}</span>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default PetPicker;
