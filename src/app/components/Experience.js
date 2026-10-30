import React from "react";
import AnimatedItem from "./AnimatedItem";
import Modal from "./Modal";

const Experience = ({ experience, setexperience }) => {
  return (
    <Modal
      isOpen={experience}
      onClose={() => setexperience(false)}
      className="w-[1000px] h-[500px] overflow-y-scroll smbelow:w-[95%]"
    >
      <AnimatedItem animationConfig={{ delay: 0.1 }}>
            <div className="flex flex-col w-full">
              <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                Experience
              </h1>
              <section className="mt-2 text-white">
                <div className="container">
                  <div className="space-y-6">
                    {/* Deposits */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        June 2022 - July 2023
                      </h3>
                      <h4 className="text-md font-medium">
                        Deposits, Remote [United States] - Frontend Developer
                      </h4>
                      <p className="text-sm">
                        I built/designed a functional and user-friendly
                        experience using Vue.js I Identified and evaluated new
                        technology developments, gauged applicability to
                        business processes, and provided solutions that
                        satisfied business goals and objectives. I recommended,
                        developed, integrated, administered, and evaluated
                        policies, procedures, standards, equipment, and designs
                        needed to provide flexible and cost-effective
                        operations; I Assessed new and emerging technologies to
                        determine the application being built.
                      </p>
                    </div>

                    {/* SMATTA */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">APRIL 2023</h3>
                      <h4 className="text-md font-medium">
                        Smatta, Remote [Nigeria] - Frontend Developer
                      </h4>
                      <p className="text-sm">
                        I built/designed a functional and user-friendly
                        experience using Vue.js and Nuxt,js. I identified and
                        evaluated new technology developments, gauged
                        applicability to business processes, and provided
                        solutions that satisfied business goals and objectives.
                        Converted complex Figma designs into functional screens.
                        Optimized website performance for faster loading times.
                      </p>
                    </div>

                    {/* FIBER */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        AUGUST 2020 - DECEMBER 2022
                      </h3>
                      <h4 className="text-md font-medium">
                        Fiber, Remote [Nigeria] - Frontend Developer
                      </h4>
                      <p className="text-sm">
                        I built/designed a functional and user-friendly
                        experience using Vue.js and Nuxt,js. I identified and
                        evaluated new technology developments, gauged
                        applicability to business processes, and provided
                        solutions that satisfied business goals and objectives.
                        Converted complex Figma designs into functional screens.
                        Optimized website performance for faster loading times.
                      </p>
                    </div>

                    {/* Bertilion Labs */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        AUGUST 2022 - APRIL 2023
                      </h3>
                      <h4 className="text-md font-medium">
                        Bertillion Labs [United Kingdom] - Java/Andriod
                        Developer
                      </h4>
                      <p className="text-sm">
                        Customised the bio-data form fields in our apps
                        interface to meet indicated specifications. Debugged and
                        ensured no app crashes exist after completion of work.
                        Ensured code was properly documented.
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

export default Experience;
