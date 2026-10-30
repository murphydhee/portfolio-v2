"use client";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "murphydhee";

const formatRelativeDate = (isoDate) => {
  const date = new Date(isoDate);
  const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
};

// GitHub's public REST API allows unauthenticated, CORS-enabled reads —
// no backend proxy or API key needed, but it's capped at 60 req/hr per IP.
export default function useGithubRepos() {
  const [state, setState] = useState({ status: "loading", repos: [] });

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=6`,
    )
      .then((response) => {
        if (!response.ok) throw new Error("GitHub lookup failed");
        return response.json();
      })
      .then((repos) => {
        if (cancelled) return;
        setState({
          status: "ready",
          repos: repos.map((repo) => ({
            id: repo.id,
            title: repo.name,
            subtitle: repo.description || "No description",
            meta: [repo.language, `★ ${repo.stargazers_count}`, formatRelativeDate(repo.pushed_at)]
              .filter(Boolean)
              .join(" · "),
            href: repo.html_url,
          })),
        });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", repos: [] });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
