"use client";
import React, { useState, useEffect } from "react";
import { BsFillCloudFill } from "react-icons/bs";
import useWeather from "./useWeather";

// Mirrors macOS's menu-bar status items: always visible, top-right, unlike
// the Dock (Taskbar) which auto-hides at the bottom.
const StatusBar = () => {
  const weather = useWeather();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString([], {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="hidden sm:flex items-center gap-3 rounded-full bg-black bg-opacity-30 backdrop-blur-md px-4 py-1.5 text-white">
      {weather.status === "ready" ? (
        <div className="flex items-center gap-1.5" title={weather.label}>
          <weather.Icon className="text-xl text-blue-300" aria-hidden="true" />
          <span className="text-sm font-Rubik font-light">
            {weather.temperature}°C
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 opacity-50">
          <BsFillCloudFill className="text-lg text-blue-300" aria-hidden="true" />
          <span className="text-sm font-Rubik font-light">
            {weather.status === "loading" ? "…" : "N/A"}
          </span>
        </div>
      )}
      <span className="h-4 w-px bg-white bg-opacity-20" aria-hidden="true" />
      <span className="text-sm font-Rubik font-light">{formattedTime}</span>
      <span className="text-sm font-Rubik font-light opacity-70">
        {formattedDate}
      </span>
    </div>
  );
};

export default StatusBar;
