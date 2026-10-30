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

// Abuja, Nigeria — used only as a fallback when the visitor's own location
// isn't available, and always labeled as such (never presented as theirs).
const FALLBACK_LOCATION = { name: "Abuja", latitude: 9.0765, longitude: 7.3986 };

const fetchWeather = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`,
  );
  if (!response.ok) throw new Error("Weather lookup failed");
  const data = await response.json();
  const temperature = Math.round(data.current.temperature_2m);
  const { label, Icon } = describeWeatherCode(data.current.weather_code);
  return { temperature, label, Icon };
};

// Live weather for the visitor's own location, via the browser's geolocation
// API and Open-Meteo (free, no API key). Falls back to Abuja — clearly
// labeled as the site owner's location, never implied to be the visitor's —
// if permission is denied, geolocation isn't available, or the lookup fails.
export default function useWeather() {
  const [weather, setWeather] = useState({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    const loadFallbackWeather = async () => {
      try {
        const result = await fetchWeather(
          FALLBACK_LOCATION.latitude,
          FALLBACK_LOCATION.longitude,
        );
        if (!cancelled) {
          setWeather({
            status: "ready",
            isFallback: true,
            location: FALLBACK_LOCATION.name,
            ...result,
          });
        }
      } catch {
        if (!cancelled) setWeather({ status: "unavailable" });
      }
    };

    if (!("geolocation" in navigator)) {
      loadFallbackWeather();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const result = await fetchWeather(
            position.coords.latitude,
            position.coords.longitude,
          );
          if (!cancelled) {
            setWeather({ status: "ready", isFallback: false, ...result });
          }
        } catch {
          if (!cancelled) loadFallbackWeather();
        }
      },
      () => loadFallbackWeather(),
      { timeout: 8000 },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return weather;
}
