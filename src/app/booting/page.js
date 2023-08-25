"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";
import { TypeAnimation } from "react-type-animation";
import { motion as m } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const quotes = useMemo(
    () => [
      "Human strength lies in the ability to change yourself. – Saitama.\n",
      "A dropout will beat a genius through hard work.” –  Rock Lee.",
      "Forgetting is like a wound. The wound may heal, but it has already left a scar. – Monkey D.",
      "How can you keep moving forward if you keep regretting the past? – Edward Elric.",
      "You focus on the trivial and lose sight of what is most important; change is impossible in this fog of ignorance. – Itachi Uchiha.",
      "Giving up kills people. When people reject giving up… they finally win the right to transcend humanity. – Alucard.",
      "You can die anytime, but living takes true courage – Kenshin Himura.",
      "The world is cruel but also very beautiful. – Mikasa Ackerman.",
      "Because people don’t have wings, we look for ways to fly – Coach Ukai.",
      " People’s lives don’t end when they die, it ends when they lose faith.  – Itachi Uchiha .",
      "How can you destroy a monster without becoming one? – Kaneki ",
      "If you can’t do something, then don’t. Focus on what you can do – Shiroe",
      "Push through the pain; giving up hurts more. – Vegeta.",
      "I won’t be defeated because I know how awful it feels to lose after doing my very best! – Sho Kazamatsuri.",
    ],
    [],
  );

  const getRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }, [quotes]);

  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    setCurrentQuote(getRandomQuote());

    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 5000);

    return () => clearInterval(interval);
  }, [getRandomQuote]);

  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exitOpacity={1}
    >
      <main className="flex flex-col h-screen items-center justify-center p-5 bg-slate-950 booting">
        <div className="flex flex-col items-center justify-center flex-grow">
          <Image
            src="/aot.gif"
            width={900}
            height={900}
            className="mb-10"
            alt="Attack on Titan"
          />
          {/*<ImSpinner8 className="animate-spin text-3xl text-white" />*/}
        </div>
        <div className="lg:ml-32 lg:mr-32">
          <TypeAnimation
            sequence={[
              currentQuote,
              700,
              () => {
                router.push("/welcome");
              },
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "18px", display: "inline-block" }}
            className="font-Rajdhani text-center text-white"
          />
        </div>
      </main>
    </m.div>
  );
}
