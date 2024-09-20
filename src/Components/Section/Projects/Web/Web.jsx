import React from "react";

import {
  Images_project_web1,
  Images_project_web2,
  Images_project_web3,
  Images_project_web4,
  Images_project_web5,
  Images_project_web6,
} from "@/assets";

export default function Web() {
  
  const projectWeb = [
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
      title: "Median",
      description: "Web-based social publishing platform website",
      image: Images_project_web3,
      textColor: "text-[#005555]",
      bgColor: "bg-[#005555]",
      borderColor: "border-[#005555]",
      techStack: [
        {
          id: 1,
          name: "VueJs",
        },
        {
          id: 2,
          name: "TailwindCSS",
        },
      ],
      textButton: "Demo",
      url: "https://median-website.vercel.app/",
    },
    {
      id: 4,
      title: "TIKET-KA",
      description: "Website for booking train tickets",
      image: Images_project_web4,
      textColor: "text-[#002662]",
      bgColor: "bg-[#002662]",
      borderColor: "border-[#002662]",
      techStack: [
        {
          id: 1,
          name: "VueJs",
        },
        {
          id: 2,
          name: "TailwindCSS",
        },
      ],
      textButton: "Demo",
      url: "https://tiket-ka.vercel.app/",
    },
    {
      id: 5,
      title: "Furnify",
      description: "Ecommerce Website for Furniture",
      image: Images_project_web5,
      textColor: "text-[#C6A385]",
      bgColor: "bg-[#C6A385]",
      borderColor: "border-[#C6A385]",
      techStack: [
        {
          id: 1,
          name: "Bootstrap",
        },
        {
          id: 2,
          name: "Javascript",
        },
        {
          id: 3,
          name: "JQuery",
        },
      ],
      textButton: "Demo",
      url: "https://muhamadridwanpermana.github.io/furnify/",
    },
    {
      id: 6,
      title: "JokiinAja",
      description:
        "Website for Assignment Services for students and college students",
      image: Images_project_web6,
      textColor: "text-[#A2DC4D]",
      bgColor: "bg-[#A2DC4D]",
      borderColor: "border-[#A2DC4D]",
      techStack: [
        {
          id: 1,
          name: "Bootstrap",
        },
        {
          id: 2,
          name: "Javascript",
        },
        {
          id: 3,
          name: "JQuery",
        },
      ],
      textButton: "Visit",
      url: "https://muhamadridwanpermana.github.io/jokiinaja/",
    },
  ];

  return (
    <>
      <div className="animate__FadeIn w-full h-full justify-center grid lg:grid-cols-2 gap-16 duration-150">
        {projectWeb.map((item) => (
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
                    <h1 className={`font-semibold text-lg ${item.textColor}`}>
                      {item.title}
                    </h1>
                    <p className="font-light text-xs">{item.description}</p>
                  </div>
                  <div
                    className="w-fit h-fit grid items-center gap-1"
                  >
                    <h1 className={`font-medium text-sm ${item.textColor}`}>
                      Tech Stack
                    </h1>
                    <div
                     
                      className="w-fit h-fit flex items-center gap-1"
                    >
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
                  <button
                    className="w-fit h-fit text-xs text-primary"
                  >
                    {item.textButton}
                  </button>
                  <i className="bi bi-arrow-right-short text-primary"></i>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
