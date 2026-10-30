"use client";
import { useEffect, useState } from "react";

// Drag-and-drop desktop icons are a pointer/desktop affordance; touch
// screens keep the static grid, so this defaults true (desktop) and
// corrects itself on mount, before any interaction is plausible.
export default function useIsDesktopViewport(breakpoint = 640) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isDesktop;
}
