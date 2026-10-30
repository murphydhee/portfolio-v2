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
      <main className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div
          className={
            blur
              ? "flex flex-col items-center w-screen justify-center flex-grow backdrop-blur-md"
              : "flex flex-col items-center justify-center flex-grow"
          }
        >
          <Image
            src="/me.GIF"
            width={200}
            height={200}
            className="mb-6 rounded-full"
            alt="Mfon Ekwere"
            unoptimized
          />
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
            style={{ display: "inline-block" }}
            className="text-4xl text-white font-barriecito text-center mb-4"
          />
          <label htmlFor="visitor-name" className="sr-only">
            Enter your name
          </label>
          <input
            id="visitor-name"
            type="text"
            className="border-gray-400 border-b-2 w-[300px] rounded-md bg-gray-950 p-2 text-white outline-none mb-5 focus-visible:ring-2 focus-visible:ring-white"
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
            className="py-3 px-1 text-white rounded-md w-[150px] bg-white bg-opacity-20 backdrop-blur-2xl shadow-lg flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
              " Login"
            )}
          </button>
        </div>
        <div className="flex items-center justify-center p-3 backdrop-blur-lg space-x-6 w-screen"></div>
      </main>
    </m.div>
  );
};

export default Page;
