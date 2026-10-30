"use client";
import React from "react";
import ActivityWindow from "./ActivityWindow";
import useArticles from "./useArticles";

const ArticlesWindow = ({ isOpen, onClose }) => {
  const { status, articles } = useArticles();

  return (
    <ActivityWindow
      isOpen={isOpen}
      onClose={onClose}
      title="Articles"
      status={status}
      items={articles}
      emptyMessage="No articles published yet."
      footerLink={{
        label: "View all articles on Medium",
        href: "https://murphydhee.medium.com/",
      }}
    />
  );
};

export default ArticlesWindow;
