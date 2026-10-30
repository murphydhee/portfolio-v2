"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useRouter } from "next/navigation";
import { BiLoaderAlt } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [blur, setBlur] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const onInputClick = () => {
    setBlur(true);
  };

  const handleBlur = () => {
    setBlur(false);
  };

  const proceed = () => {
    setLoading(true);
    if (name !== "") {
      localStorage.setItem("name", name);
    }
    const audio = new Audio("start.mp3");
    audio.play();
    router.push("/home");
  };

  return (
    <m.div
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <main className="relative flex flex-col h-screen w-full overflow-hidden">
        {/* Full-bleed wallpaper, blurred like a lock screen */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center homepage"
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg transition ${
            blur ? "backdrop-blur-xl" : ""
          }`}
        />

        {/* Greeting, pinned near the top — like macOS's lock-screen clock */}
        <div className="relative z-10 flex justify-center pt-20 smbelow:pt-12 px-5">
          <TypeAnimation
            sequence={[
              "こんにちは Kon'nichiwa 🇯🇵",
              900,
              "Hola 🇪🇸",
              900,
              "Hello! 👋🏾",
              900,
              "How far! 👋🏾🇳🇬",
              900,
              "Welcome! What's your name?",
            ]}
            wrapper="h1"
            speed={50}
            style={{ display: "inline-block", minHeight: "1.2em" }}
            className="text-3xl smbelow:text-2xl text-white font-barriecito text-center drop-shadow-lg"
          />
        </div>

        {/* Avatar + sign-in, lower on the screen */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-end pb-24 smbelow:pb-16 gap-4 px-5">
          <Image
            src="/me.GIF"
            width={360}
            height={270}
            className="w-[140px] h-[140px] object-cover rounded-full ring-2 ring-white ring-opacity-30 shadow-2xl"
            alt="Mfon Ekwere"
            unoptimized
          />
          <label htmlFor="visitor-name" className="sr-only">
            Enter your name
          </label>
          <input
            id="visitor-name"
            type="text"
            className="border-b-2 border-white border-opacity-30 w-[260px] text-center rounded-md bg-white bg-opacity-10 backdrop-blur-md p-2 text-white placeholder-white placeholder-opacity-70 outline-none focus-visible:ring-2 focus-visible:ring-white"
            placeholder="Enter your name"
            name="yourname"
            value={name}
            autoComplete="off"
            onChange={nameHandler}
            onBlur={handleBlur}
            onClick={onInputClick}
          />
          <button
            type="button"
            className="py-2 px-6 text-white rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition shadow-lg flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={proceed}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center">
                <BiLoaderAlt
                  className="animate-spin mr-2 text-2xl"
                  aria-hidden="true"
                />
                Please Wait...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </main>
    </m.div>
  );
};

export default Page;
