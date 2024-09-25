import React from "react";

import {
  Dishub_logo,
  IMCreative_logo,
  Sadigit_logo,
  Tahungoding_logo,
} from "@/assets";

const data = [
  {
    id: 1,
    image: Tahungoding_logo,
    title: "Tahungoding",
    subtitle: "Frontend Web Development",
    date: "August 2021 - August 2022",
    techStack: [
      {
        id: 1,
        name: "Javascript",
      },
      {
        id: 2,
        name: "Bootstrap",
      },
      {
        id: 3,
        name: "JQuery",
      },
    ],
    tasks: [
      {
        id: 1,
        name: "Developed landing page official website for Tahungoding",
      },
      {
        id: 2,
        name: "Developed a responsive website",
      },
      {
        id: 3,
        name: "Running multiple functions dynamically",
      },
    ],
  },
  {
    id: 2,
    image: Dishub_logo,
    title: "Dinas Perhubungan Kabupaten Sumedang",
    subtitle: "UI Design & Frontend Web Development - Project Trackeun",
    date: "August 2022 - August 2023",
    techStack: [
      {
        id: 1,
        name: "Figma",
      },
      {
        id: 2,
        name: "Adobe XD",
      },
      {
        id: 3,
        name: "Javascript",
      },
      {
        id: 4,
        name: "Bootstrap",
      },
      {
        id: 5,
        name: "JQuery",
      },
    ],
    tasks: [
      {
        id: 1,
        name: "Created UI Design User Friendly for Web Application Transportation",
      },
      {
        id: 2,
        name: "Developed a responsive Web Application Transportation",
      },
      {
        id: 4,
        name: "Integrate with API from Google Maps",
      },
    ],
  },
  {
    id: 3,
    image: IMCreative_logo,
    title: "IM Creative",
    subtitle: "Mentor Git and Github",
    date: "October 2023 - September 2023",
    techStack: [
      {
        id: 1,
        name: "Version Control System",
      },
      {
        id: 2,
        name: "Git",
      },
      {
        id: 3,
        name: "Github",
      },
    ],
    tasks: [
      {
        id: 1,
        name: "Conducting guidance and learning for students about Version Control System",
      },
      {
        id: 2,
        name: "Checking and verifying the recap of activities/assignments that have been given",
      },
      {
        id: 3,
        name: "Practicing the material that has been taught directly",
      },
    ],
  },
  {
    id: 4,
    image: Sadigit_logo,
    title: "PT Sawarga Digital Indonesia",
    subtitle: "Frontend Web Development - Internship",
    date: "October 2023 - Desember 2023",
    techStack: [
      {
        id: 1,
        name: "Javascript",
      },
      {
        id: 2,
        name: "ReactJs",
      },
      {
        id: 3,
        name: "TailwindCSS",
      },
    ],
    tasks: [
      {
        id: 1,
        name: "Developed a Web Application Smart Grosir Lite",
      },
      {
        id: 2,
        name: "Developed a responsive Web Application",
      },
      {
        id: 3,
        name: "Integrate with API",
      },
      {
        id: 4,
        name: "Running multiple functions dynamically",
      },
    ],
  },
];

export default function Work() {
  return (
    <>
      <section className="w-full h-fit grid gap-10 animate__FadeIn">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className="w-full h-fit pb-5 border-b border-primary border-opacity-40"
            >
              <div className="flex justify-between items-end ">
                <div className="w-full h-fit flex justify-start">
                  <div className="flex items-center w-11 h-auto rounded-full">
                    <img src={item.image} alt="" className="p-1" />
                  </div>
                  <div className="ml-3 w-full h-fit">
                    <h1 className="font-semibold lg:text-lg text-primary">
                      {item.title}
                    </h1>
                    <p className="lg:max-w-full md:max-w-full max-w-44 lg:text-xs text-[10px] text-primary">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="lg:w-full text-right lg:text-xs text-[10px] text-primary">
                  {item.date}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.techStack.map((stack) => (
                  <>
                    <p className="text-[10px] border border-primary border-opacity-40 bg-primary bg-opacity-10 text-primary w-fit h-fit px-2 py-0.5 rounded-lg">
                      {stack.name}
                    </p>
                  </>
                ))}
              </div>
              <div className="mt-3 text-primary">
                <h2 className="font-semibold lg:text-lg text-sm">
                  The responsibilities include:
                </h2>
                <ul className="list-disc ml-5 mt-1 lg:text-sm text-xs lg:max-w-[40rem] md:max-w-full max-w-80 h-fit">
                  {item.tasks.map((task) => (
                    <>
                      <li>{task.name}</li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}
