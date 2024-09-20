import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  TittleSection,
  Web,
  Mobile,
  Design,
  DetailProjects,
} from "@/Components";

// const category = [
//   {
//     id: 0,
//     title: "All",
//   },
//   {
//     id: 1,
//     title: "Web",
//   },
//   {
//     id: 2,
//     title: "Mobile",
//   },
//   {
//     id: 3,
//     title: "Design",
//   },
// ];

import {
  Images_project_web1,
  Images_project_web2,
  Images_project_mobile1,
  Images_project_mobile2,
  Images_project_design1,
  // Images_project_design2,
} from "@/assets";

export default function Projects() {
  // const [Category, setCategory] = useState(0);
  // const handleCategory = (id) => {
  //   setCategory(id);
  // };

  const projects = [
    {
      id: 1,
      title: "Tahungoding",
      description: "Official Website for Tahungoding",
      image: Images_project_web1,
      textColor: "text-[#e8ca21]",
      bgColor: "bg-[#e8ca21]",
      borderColor: "border-[#e8ca21]",
      techStack: [
        {
          id: 1,
          name: "Bootstrap",
        },
        {
          id: 2,
          name: "Laravel",
        },
        {
          id: 3,
          name: "JQuery",
        },
      ],
      textButton: "Visit",
      url: "https://www.tahungoding.id/",
    },
    {
      id: 2,
      title: "Smart Grosir Lite",
      description: "A Lite version of Smart Grosir",
      image: Images_project_web2,
      textColor: "text-[#1f8bff]",
      bgColor: "bg-[#1f8bff]",
      borderColor: "border-[#1f8bff]",
      techStack: [
        {
          id: 1,
          name: "ReactJs",
        },
        {
          id: 2,
          name: "TailwindCSS",
        },
        {
          id: 3,
          name: "Codeigniter",
        },
      ],
      textButton: "Demo",
      url: "http://smart-grosir-lite.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Weather App using OpenWeather API and PWA",
      image: Images_project_mobile1,
      textColor: "text-[#444444]",
      bgColor: "bg-[#444444]",
      borderColor: "border-[#444444]",
      techStack: [
        {
          id: 1,
          name: "ReactJs",
        },
        {
          id: 2,
          name: "TailwindCSS",
        },
      ],
      textButton: "Visit",
      url: "https://myweather-application.vercel.app/",
    },
    {
      id: 4,
      title: "YourNote. App",
      description: "Note App using LocalStorage and PWA",
      image: Images_project_mobile2,
      textColor: "text-[#FB923C]",
      bgColor: "bg-[#FB923C]",
      borderColor: "border-[#FB923C]",
      techStack: [
        {
          id: 1,
          name: "ReactJs",
        },
        {
          id: 2,
          name: "TailwindCSS",
        },
      ],
      textButton: "Visit",
      url: "https://yournote-app.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "YourNote. App UI Design",
    //   description: "UI Design for Note App.",
    //   image: Images_project_design1,
    //   textColor: "text-[#FB923C]",
    //   bgColor: "bg-[#FB923C]",
    //   borderColor: "border-[#FB923C]",
    //   techStack: [
    //     {
    //       id: 1,
    //       name: "Figma",
    //     },
    //   ],
    //   textButton: "View Detail",
    // },
    // {
    //   id: 6,
    //   title: "Weather App UI Design",
    //   description: "UI Design for Weather App.",
    //   image: Images_project_mobile1,
    //   textColor: "text-[#444444]",
    //   bgColor: "bg-[#444444]",
    //   borderColor: "border-[#444444]",
    //   techStack: [
    //     {
    //       id: 1,
    //       name: "Figma",
    //     },
    //   ],
    //   textButton: "View Detail",
    // },
  ];

  const autoScrolltoTop = () => {
    window.scrollTo({
      top: document.querySelector(`#projects`).offsetTop,
      behavior: "smooth",
    });
  };

  const [ShowProjects, setShowProjects] = useState(true);
  const toggleShowProjects = () => {
    setShowProjects(!ShowProjects);

    if (ShowProjects) {
      document.getElementById("simpleProject").classList.add("hidden");
      document.getElementById("detailProjetcs").classList.remove("hidden");
      document.getElementById("buttonViewMore").innerHTML = "View Less";
      autoScrolltoTop();
    } else {
      document.getElementById("simpleProject").classList.remove("hidden");
      document.getElementById("detailProjetcs").classList.add("hidden");
      document.getElementById("buttonViewMore").innerHTML = "View More";
      autoScrolltoTop();
    }
  };

  return (
    <>
      <div id="projects" className="h-1 bg-white"></div>

      <section className="w-full  h-full grid justify-center lg:px-0 lg:mb-72 px-8 my-32">
        <TittleSection title="Projects" subtitle="My Recently Projects" />

        {/* <div className="w-fit h-fit mx-auto bg-white p-3 flex gap-1 justify-center border-secondary rounded-xl">
        <div className="lg:w-fit w-full h-full grid justify-center mt-16">
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
                  <ListProjectWeb />
                  <Mobile />
                  <Design />
                </div>
              </>
            )}
          </div>
          </div> */}
        <div className="w-full h-fit grid gap-24 justify-center mt-16">
          <div
            id="simpleProject"
            className="w-full h-full justify-center grid lg:grid-cols-2 gap-16 duration-150"
          >
            {projects.map((item) => (
              <>
                <div
                  key={item.id}
                  className="w-full h-fit bg-white p-8 rounded-2xl border border-opacity-20 hover:border-opacity-10 border-primary hover:shadow-md duration-500"
                >
                  <div className="lg:w-96 w-full h-auto">
                    <img
                      src={item.image}
                      alt="Project Web 1"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                  <div className="w-full h-auto mt-5 grid gap-7">
                    <div className="w-full h-auto grid gap-5">
                      <div className="w-fit h-fit">
                        <h1
                          className={`font-semibold text-lg ${item.textColor}`}
                        >
                          {item.title}
                        </h1>
                        <p className="font-light text-xs">{item.description}</p>
                      </div>
                      <div className="w-fit h-fit grid items-center gap-1">
                        <h1 className={`font-medium text-sm ${item.textColor}`}>
                          Tech Stack
                        </h1>
                        <div className="w-fit h-fit flex items-center gap-1">
                          {item.techStack.map((stack) => (
                            <>
                              <p
                                key={stack.id}
                                className={`font-light text-[10px] ${item.bgColor} bg-opacity-10 border ${item.borderColor} border-opacity-40 ${item.textColor} w-fit h-fit px-1 py-0.5 rounded`}
                              >
                                {stack.name}
                              </p>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      className={`w-fit h-fit flex items-center gap-1 hover:gap-1.5 hover:duration-500 duration-300 cursor-pointer hover:border-b-2 ${item.borderColor} border-opacity-50`}
                    >
                      <button className="w-fit h-fit text-xs text-primary">
                        {item.textButton}
                      </button>
                      <i className="bi bi-arrow-right-short text-primary"></i>
                    </a>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div id="detailProjetcs" className="hidden">
            <DetailProjects />
          </div>

          <div className="w-full h-fit flex justify-center">
            <button
              id="buttonViewMore"
              className="px-6 py-1.5 w-fit h-fit text-sm text-primary border border-primary border-opacity-30 rounded-full hover:scale-105 hover:text-primary hover:duration-500 duration-500"
              onClick={toggleShowProjects}
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
