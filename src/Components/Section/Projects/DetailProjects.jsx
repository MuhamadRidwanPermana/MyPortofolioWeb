import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  TittleSection,
  Web,
  Mobile,
  Design,
  Footer,
  ButtonScrollUp,
} from "@/Components";

const category = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Web",
  },
  {
    id: 2,
    title: "Mobile",
  },
  {
    id: 3,
    title: "Design",
  },
];

export default function DetailProjects() {
  const [Category, setCategory] = useState(0);
  const handleCategory = (id) => {
    setCategory(id);
    window.scrollTo({
      top: document.querySelector(`#projects`).offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="menuProjects"
        className="lg:w-fit w-full h-full grid justify-center"
      >
        <div className="sticky lg:top-20 top-5 z-10 w-fit h-fit mx-auto bg-white p-3 flex gap-1 justify-center rounded-xl">
          {category.map((item) => (
            <button
              key={category.id}
              className={`px-4 py-1 rounded-xl overflow-hidden text-primary hover:text-white hover:bg-primary transition-all duration-200 ${
                Category === item.id ? "bg-primary text-white" : "bg-white"
              } `}
              onClick={() => handleCategory(item.id)}
            >
              <h1>{item.title}</h1>
            </button>
          ))}
        </div>

        <div className="w-full h-fit mt-16 grid">
          {Category === 1 ? (
            <>
              <Web />
            </>
          ) : Category === 2 ? (
            <>
              <Mobile />
            </>
          ) : Category === 3 ? (
            <>
              <Design />
            </>
          ) : (
            <>
              <div className="w-full h-full grid justify-center gap-16">
                <Web />
                <Mobile />
                <Design />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
