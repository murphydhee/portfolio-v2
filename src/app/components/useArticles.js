"use client";
import { useEffect, useState } from "react";

// Calls our own /api/articles route handler, which fetches and parses
// Medium's RSS feed server-side (Medium's feed isn't reliably readable
// cross-origin from the browser).
export default function useArticles() {
  const [state, setState] = useState({ status: "loading", articles: [] });

  useEffect(() => {
    let cancelled = false;

    fetch("/api/articles")
      .then((response) => {
        if (!response.ok) throw new Error("Articles lookup failed");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setState({ status: "ready", articles: data.articles || [] });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", articles: [] });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
