"use client";
import React from "react";
import { motion as m } from "framer-motion";

const Ears = ({ earStyle, color }) => {
  if (earStyle === "pointy") {
    return (
      <>
        <path d="M20 30 L8 4 L36 23 Z" fill={color} />
        <path d="M80 30 L92 4 L64 23 Z" fill={color} />
      </>
    );
  }
  if (earStyle === "floppy") {
    return (
      <>
        <ellipse
          cx="17"
          cy="40"
          rx="10"
          ry="17"
          fill={color}
          transform="rotate(-18 17 40)"
        />
        <ellipse
          cx="83"
          cy="40"
          rx="10"
          ry="17"
          fill={color}
          transform="rotate(18 83 40)"
        />
      </>
    );
  }
  if (earStyle === "antenna") {
    return (
      <>
        <line x1="50" y1="16" x2="50" y2="2" stroke={color} strokeWidth="3" />
        <circle cx="50" cy="2" r="4" fill="#4F9DDE" />
      </>
    );
  }
  return null;
};

// A shared base sprite: one silhouette language (Apple design skill's
// "familiarity" principle), differentiated by ear style, color, and an
// optional muzzle patch — eyes blink on a loop via framer-motion.
const PetSprite = ({ color, accent, earStyle, muzzle, bob = true }) => {
  const isGhost = earStyle === "none";

  const svg = (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <Ears earStyle={earStyle} color={color} />
      {isGhost ? (
        <path
          d="M12 55 a38 38 0 0 1 76 0 v22 q-6 7 -12 0 q-6 7 -12 0 q-6 7 -12 0 q-6 7 -12 0 q-6 7 -12 0 q-6 7 -12 0 q-6 7 -12 0 z"
          fill={color}
        />
      ) : (
        <circle cx="50" cy="55" r="38" fill={color} />
      )}
      {muzzle && <ellipse cx="50" cy="68" rx="14" ry="10" fill={muzzle} />}
      <m.g
        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          repeatDelay: 1.6,
          times: [0, 0.88, 0.92, 0.96, 1],
        }}
        style={{ originX: "50%", originY: "50%" }}
      >
        <circle cx="36" cy="52" r="5" fill="#222222" />
        <circle cx="64" cy="52" r="5" fill="#222222" />
      </m.g>
      <circle cx="30" cy="64" r="5" fill={accent} opacity="0.45" />
      <circle cx="70" cy="64" r="5" fill={accent} opacity="0.45" />
    </svg>
  );

  if (!bob) return svg;

  return (
    <m.div
      animate={{ y: [0, -6, 0], rotate: [0, -2, 0, 2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {svg}
    </m.div>
  );
};

export default PetSprite;
