import React, { useState } from "react";

import { TittleSection, Education, Work, Organization } from "@/Components";

const category = [
  {
    id: 1,
    icon: "lg:text-xl uil uil-suitcase",
    title: "Work",
  },
  {
    id: 2,
    icon: "lg:text-xl uil uil-graduation-cap",
    title: "Education",
  },
  {
    id: 3,
    icon: "lg:text-xl uil uil-users-alt",
    title: "Organization",
  },
];

export default function Experience() {
  const [Category, setCategory] = useState(0);
  const handleCategory = (id) => {
    setCategory(id);
    window.scrollTo({
      top: document.querySelector(`#learnAbout`).offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="learnAbout" className="h-1 bg-white"></div>
      <section id="experience" className="w-full h-full justify-center lg:mt-32 lg:mb-32 lg:my-72 my-16">
        <div className="w-full h-full lg:justify-center">
          <TittleSection title="Experience" subtitle="Experience I Have" />

          <div className="w-full h-fit grid gap-1 mt-10">
            <div className="overflow-auto sticky lg:top-16 top-0 z-10 w-full bg-white flex gap-5 justify-center items-center py-5">
              {category.map((item) => (
                <button
                  key={category.id}
                  className={`h-fit flex lg:gap-3 gap-2 items-center lg:px-3 px-1 py-1 overflow-hidden text-primary hover:border-b hover:border-primary transition-all duration-500 ${
                    Category === item.id
                      ? "border-b border-primary text-primary"
                      : "border-b border-white"
                  } `}
                  onClick={() => handleCategory(item.id)}
                >
                  <i className={item.icon}></i>
                  <h1 className="lg:text-base text-sm">{item.title}</h1>
                </button>
              ))}
            </div>

            <div className="w-full h-fit lg:mt-16 mt-5 grid">
              {Category === 3 ? (
                <>
                  <Organization />
                </>
              ) : Category === 2 ? (
                <>
                  <Education />
                </>
              ) : (
                <>
                  <Work />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
