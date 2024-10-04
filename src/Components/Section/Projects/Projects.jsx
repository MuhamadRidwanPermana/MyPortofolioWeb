import React, { useState } from "react";

import {
  TittleSection,
  DetailProjects,
} from "@/Components";

import {
  Images_project_web1,
  Images_project_web2,
  Images_project_mobile1,
  Images_project_mobile2,
} from "@/assets";

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Tahungoding",
      description: "Official Website for Tahungoding",
      image: Images_project_web1,
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
    }
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
        <div className="w-full h-fit grid gap-16 justify-center mt-16">
          <div
            id="simpleProject"
            className="w-full h-full justify-center grid lg:grid-cols-2 md:grid-cols-2 gap-16 duration-150"
          >
            {projects.map((item) => (
              <>
                <div
                  key={item.id}
                  className="w-full h-fit bg-white p-8 rounded-2xl border border-opacity-20 border-primary"
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
                          className="font-semibold text-lg text-primary"
                        >
                          {item.title}
                        </h1>
                        <p className="font-light text-xs">{item.description}</p>
                      </div>
                      <div className="w-fit h-fit grid items-center gap-1">
                        <h1 className="font-medium text-sm text-primary">
                          Tech Stack
                        </h1>
                        <div className="w-fit h-fit flex items-center gap-1">
                          {item.techStack.map((stack) => (
                            <>
                              <p
                                key={stack.id}
                                className="font-light text-[10px] bg-primary bg-opacity-10 border border-primary border-opacity-40 text-primary w-fit h-fit px-1 py-0.5 rounded"
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
                      className="w-fit h-fit flex items-center gap-1 hover:gap-1.5 hover:duration-500 duration-300 cursor-pointer hover:border-b border-primary border-opacity-50"
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