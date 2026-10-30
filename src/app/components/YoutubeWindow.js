"use client";
import React from "react";
import ActivityWindow from "./ActivityWindow";
import useYoutubeVideos from "./useYoutubeVideos";

const YoutubeWindow = ({ isOpen, onClose }) => {
  const { status, videos } = useYoutubeVideos();

  return (
    <ActivityWindow
      isOpen={isOpen}
      onClose={onClose}
      title="YouTube"
      status={status}
      items={videos}
      emptyMessage="No videos to show yet."
      footerLink={{
        label: "View channel on YouTube",
        href: "https://www.youtube.com/@subbyalpha",
      }}
    />
  );
};

export default YoutubeWindow;
