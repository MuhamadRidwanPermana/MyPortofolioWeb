import React from "react";

import { Images_project_mobile1, Images_project_mobile2 } from "@/assets";

const projectsMobile = [
  {
    id: 1,
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
    id: 2,
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
]

export default function Mobile() {
  return (
    <div className="animate__FadeIn w-full h-full justify-center grid lg:grid-cols-2 gap-16 duration-150">
      {projectsMobile.map((item, index) => (
        <>
          <div
            key={index}
            className="w-full h-fit bg-white p-8 rounded-2xl border border-opacity-20 hover:border-opacity-10 border-primary hover:shadow-md duration-500 grayscale hover:grayscale-0"
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
                  <h1 className={`font-semibold text-lg ${item.textColor}`}>
                    {item.title}
                  </h1>
                  <p className="font-light text-xs">{item.description}</p>
                </div>
                <div className="w-fit h-fit grid items-center gap-1">
                  <h1 className={`font-medium text-sm ${item.textColor}`}>
                    Tech Stack
                  </h1>
                  <div className="w-fit h-fit flex items-center gap-1">
                    {item.techStack.map((stack, index) => (
                      <>
                        <p
                          key={index}
                          className={`font-light text-[10px] ${item.bgColor} bg-opacity-10 border ${item.bgColor} border-opacity-40 ${item.textColor} w-fit h-fit px-1 py-0.5 rounded`}
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
  );
}
