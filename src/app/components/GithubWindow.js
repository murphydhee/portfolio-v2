"use client";
import React from "react";
import ActivityWindow from "./ActivityWindow";
import useGithubRepos from "./useGithubRepos";

const GithubWindow = ({ isOpen, onClose }) => {
  const { status, repos } = useGithubRepos();

  return (
    <ActivityWindow
      isOpen={isOpen}
      onClose={onClose}
      title="GitHub Activity"
      status={status}
      items={repos}
      emptyMessage="No public repos to show yet."
      footerLink={{
        label: "View full profile on GitHub",
        href: "https://github.com/murphydhee",
      }}
    />
  );
};

export default GithubWindow;
