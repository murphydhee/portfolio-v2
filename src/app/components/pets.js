// Original, lightweight CSS/SVG desktop-pet definitions — no external art
// assets. Each pet shares one base sprite (see PetSprite.js) and differs by
// color, ear style, and an optional muzzle patch.
export const PETS = [
  { id: "cat", label: "Cat", color: "#F3B562", accent: "#8B5E3C", earStyle: "pointy" },
  {
    id: "dog",
    label: "Dog",
    color: "#C98A52",
    accent: "#5A3A22",
    earStyle: "floppy",
    muzzle: "#F1D9BA",
  },
  {
    id: "fox",
    label: "Fox",
    color: "#E8702A",
    accent: "#2B2B2B",
    earStyle: "pointy",
    muzzle: "#FFFFFF",
  },
  { id: "robot", label: "Robot", color: "#9CA8B4", accent: "#4F9DDE", earStyle: "antenna" },
  { id: "ghost", label: "Ghost", color: "#E9E9F2", accent: "#6B6B85", earStyle: "none" },
];

export const getPetById = (id) => PETS.find((pet) => pet.id === id) || null;
