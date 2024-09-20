import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  TittleSection,
  Web,
  Mobile,
  Design,
  Footer,
  ButtonScrollUp
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
      {/* <div id="projects" className="w-full h-fit flex justify-center">
        <div className="w-[90%] h-fit flex justify-start mt-10">
          <Link to="/">
          <button className="flex gap-2 hover:px-3 hover:pr-5 py-2 px-7 w-fit h-fit text-sm text-primary hover:border-b hover:border-secondary hover:duration-500 duration-300">
            <i class="uil uil-angle-left-b"></i>
            <span>
              Back to Home
            </span>
          </button>
          </Link>
        </div>
      </div> */}
      {/* <section className="w-full  h-full grid justify-center lg:px-0 lg:mb-72 px-8 my-32"> */}
        {/* <TittleSection title="Projects" subtitle="My Recently Projects" /> */}

        <div id="menuProjects" className="lg:w-fit w-full h-full grid justify-center">
          <div className="sticky lg:top-20 top-5 z-10 w-fit h-fit mx-auto bg-white p-3 flex gap-1 justify-center border-secondary rounded-xl">
            {category.map((item) => (
              <button
                key={category.id}
                className={`px-3 py-1 rounded-lg overflow-hidden text-primary hover:text-white hover:bg-primary transition-all duration-200 ${
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
      {/* </section>
      <Footer/>

      <ButtonScrollUp id="projects"/> */}
    </>
  );
}
