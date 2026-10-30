"use client";
import { useEffect, useState } from "react";
import {
  WiDaySunny,
  WiCloud,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

// WMO weather codes: https://open-meteo.com/en/docs
const describeWeatherCode = (code) => {
  if (code === 0) return { label: "Clear", Icon: WiDaySunny };
  if ([1, 2, 3].includes(code)) return { label: "Cloudy", Icon: WiCloud };
  if ([45, 48].includes(code)) return { label: "Foggy", Icon: WiFog };
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code))
    return { label: "Rainy", Icon: WiRain };
  if ([71, 73, 75, 77, 85, 86].includes(code))
    return { label: "Snowy", Icon: WiSnow };
  if ([95, 96, 99].includes(code))
    return { label: "Stormy", Icon: WiThunderstorm };
  return { label: "Cloudy", Icon: WiCloud };
};

// Live weather for the visitor's own location, via the browser's geolocation
// API and Open-Meteo (free, no API key). Falls back to "unavailable" if
// permission is denied or the lookup fails — never shows fabricated data.
export default function useWeather() {
  const [weather, setWeather] = useState({ status: "loading" });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setWeather({ status: "unavailable" });
      return;
    }

    let cancelled = false;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`,
          );
          if (!response.ok) throw new Error("Weather lookup failed");
          const data = await response.json();
          if (cancelled) return;

          const temperature = Math.round(data.current.temperature_2m);
          const { label, Icon } = describeWeatherCode(data.current.weather_code);
          setWeather({ status: "ready", temperature, label, Icon });
        } catch {
          if (!cancelled) setWeather({ status: "unavailable" });
        }
      },
      () => {
        if (!cancelled) setWeather({ status: "unavailable" });
      },
      { timeout: 8000 },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return weather;
}
