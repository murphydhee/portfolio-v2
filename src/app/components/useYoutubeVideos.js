"use client";
import { useEffect, useState } from "react";

export default function useYoutubeVideos() {
  const [state, setState] = useState({ status: "loading", videos: [] });

  useEffect(() => {
    let cancelled = false;

    fetch("/api/youtube")
      .then((response) => {
        if (!response.ok) throw new Error("YouTube lookup failed");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setState({ status: "ready", videos: data.videos || [] });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", videos: [] });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
