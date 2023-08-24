import React from "react";
import AnimatedItem from "./AnimatedItem";
import { MdOutlineClose } from "react-icons/md";

const Impact = ({ impact, setImpact }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
        impact ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-opacity-100 backdrop-blur-3xl border border-gray-400  w-[1000px] h-[500px] overflow-y-scroll p-1 rounded-lg shadow-xl  border-opacity-10">
        <div className="flex">
          <MdOutlineClose
            className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              setImpact(false);
            }}
          />
        </div>

        <div className="flex flex-col items-start justify-start p-5">
          <AnimatedItem animationConfig={{ delay: 0.1 }}>
            <div className="flex flex-col w-full">
              <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                Impact
              </h1>
              <section className="mt-2 text-white">
                <div className="container">
                  <div className="space-y-6">
                    {/* EcoHotels */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        HostBeak Kreators Programme
                      </h3>
                      <h4 className="text-md font-medium">GDSC Lead</h4>
                      <p className="text-sm font-Rubik font-light">
                        As a HostBeak Kreators Programme Mentor, I was assigned
                        15 newbie web developers from all over africa willing to
                        learn about web development. It was an honor for me to
                        be able to share my knowledge gained from my experience
                        to inspire the next generation of tech enthusiasts.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </div>
  );
};

export default Impact;
