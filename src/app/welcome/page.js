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
      <main className="relative flex flex-col h-screen items-center justify-center bg-slate-950 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-blue-500 opacity-20 blur-3xl"
        />
        <div
          className={`relative flex flex-col items-center justify-center bg-slate-900 bg-opacity-60 backdrop-blur-2xl border border-gray-400 border-opacity-10 rounded-2xl shadow-2xl px-10 py-12 w-[420px] smbelow:w-[90%] transition ${
            blur ? "backdrop-blur-md" : ""
          }`}
        >
          <Image
            src="/me.GIF"
            width={360}
            height={270}
            className="mb-6 w-[120px] h-[120px] object-cover rounded-full ring-2 ring-white ring-opacity-20"
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
            style={{ display: "inline-block", minHeight: "1.2em" }}
            className="text-2xl text-white font-barriecito text-center mb-6"
          />
          <label htmlFor="visitor-name" className="sr-only">
            Enter your name
          </label>
          <input
            id="visitor-name"
            type="text"
            className="border-gray-400 border-opacity-30 border-b-2 w-full rounded-md bg-black bg-opacity-30 p-2 text-white outline-none mb-5 focus-visible:ring-2 focus-visible:ring-white"
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
            className="py-3 px-1 text-white rounded-md w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition shadow-lg flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
