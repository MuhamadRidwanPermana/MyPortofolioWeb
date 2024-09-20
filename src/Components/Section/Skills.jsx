import React from "react";

import { TittleSection } from "@/Components";

const skills = {
  frontend: [
    {
      skillName: "HTML",
      level: "Advance",
    },
    {
      skillName: "CSS",
      level: "Advance",
    },
    {
      skillName: "Javascript",
      level: "Intermediate",
    },
    {
      skillName: "PHP",
      level: "Intermediate",
    },
    {
      skillName: "ReactJs",
      level: "Intermediate",
    },
    {
      skillName: "VueJs",
      level: "Intermediate",
    },
    {
      skillName: "Laravel",
      level: "Intermediate",
    },
    {
      skillName: "Codeigniter",
      level: "Intermediate",
    },
  ],
  design: [
    {
      skillName: "Figma",
      level: "Advance",
    },
    {
      skillName: "Adobe XD",
      level: "Advance",
    },
    {
      skillName: "Illustrator",
      level: "Advance",
    },
    {
      skillName: "CorelDRAW",
      level: "Advance",
    },
  ],
};

// console.log(data);

export default function Skills() {
  return (
    <>

    <div id="skills" className="h-1 bg-white"></div>

      <section className="w-full h-full justify-center lg:px-0 lg:mt-36 lg:mb-72 px-8 my-12">
        <TittleSection title="Skills" subtitle="My Technical level" />

        <div className="lg:flex lg:gap-16 grid gap-12 justify-center mt-16">
          <div className="lg:w-96 border border-primary rounded-xl lg:p-5 p-2">
            <h1 className="text-center text-primary text-xl font-medium py-2 mb-2">Frontend</h1>

            <div className="grid grid-rows-4 grid-flow-col px-5 py-2 w-auto">
              {skills.frontend.map((item, index) => (
                <div key={index} className="flex py-2 mx-3">
                  <div className="w-7 px-1 pt-0.5">
                    <i className="bx bxs-badge-check text-primary"></i>
                  </div>
                  <div>
                    <h2 className="font-semibold text-primary">
                      {item.skillName}
                    </h2>
                    <h3 className="text-xs text-secondary">{item.level}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-96 border border-primary rounded-xl lg:p-5 p-2">
            <h1 className="text-center text-primary text-xl font-medium py-2 mb-2">Design</h1>

            <div className="grid grid-rows-2 grid-flow-col px-5 py-2 w-auto">
              {skills.design.map((item, index) => (
                <div key={index} className="flex py-2 mx-3">
                  <div className="w-7 px-1 pt-0.5">
                    <i className="bx bxs-badge-check text-primary"></i>
                  </div>
                  <div>
                    <h2 className="font-semibold text-primary">
                      {item.skillName}
                    </h2>
                    <h3 className="text-xs text-secondary">{item.level}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
