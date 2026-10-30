import React from "react";
import AnimatedItem from "./AnimatedItem";
import Modal from "./Modal";

const Education = ({ education, setEducation }) => {
  return (
    <Modal
      isOpen={education}
      onClose={() => setEducation(false)}
      className="w-[1000px] h-auto smbelow:w-[95%]"
    >
      <AnimatedItem animationConfig={{ delay: 0.1 }}>
        <div className="flex flex-col w-full">
          <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
            Education
          </h1>
          <section className="mt-2 text-white">
            <div className="container">
              <div className="space-y-6">
                {/* EcoHotels */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-medium">
                    2017 - University of uyo. Uyo, Akwa-ibom state
                  </h3>
                  <p className="text-sm">BEng Computer Engineering</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AnimatedItem>
    </Modal>
  );
};

export default Education;
