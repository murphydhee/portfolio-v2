import React from "react";
import AnimatedItem from "./AnimatedItem";
import Modal from "./Modal";

const Impact = ({ impact, setImpact }) => {
  return (
    <Modal
      isOpen={impact}
      onClose={() => setImpact(false)}
      className="w-[1000px] h-[500px] overflow-y-scroll smbelow:w-[95%]"
    >
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
    </Modal>
  );
};

export default Impact;
