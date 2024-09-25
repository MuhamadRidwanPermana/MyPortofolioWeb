import React from "react";

import { HIMTIKA_logo, Tahungoding_logo } from "@/assets";

const data = [
  {
    id: 1,
    image: Tahungoding_logo,
    title: "Tahungoding",
    subtitle: "Frontend Web Development Mentor",
    date: "2020 - 2023",
    tasks: [
      {
        id: 1,
        name: "Conducting guidance and learning to active members according to the established learning plan",
      },
      {
        id: 2,
        name: "Checking and verifying the recap of activities/tasks that have been given",
      },
      {
        id: 3,
        name: "Conducting observations, mentoring, providing input, suggestions and improvements related to the performance of active members",
      },
    ],
  },
  {
    id: 2,
    image: HIMTIKA_logo,
    title: "Informatics Student Association",
    subtitle: "Coordinator of Research and Development Division",
    date: "Aug 2022 - Aug 2023",
    tasks: [
      {
        id: 1,
        name: "Developing Innovation Projects and conducting research projects",
      },
      {
        id: 2,
        name: "Managing Research Projects and identifying relevant research opportunities, designing, and managing research projects",
      },
      {
        id: 3,
        name: "Collaborating with External Parties and building and maintaining relationships",
      },
      {
        id: 4,
        name: "Member Training and Development, Preparing training programs and workshops that can improve members",
      },
    ],
  },
];

export default function Organization() {
  return (
    <>
      <section className="w-full h-fit grid gap-10 animate__FadeIn">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className="w-full h-fit pb-5 border-b border-primary border-opacity-40"
            >
              <div className="grid">
                <div className="bg- w-full h-fit flex justify-start items-center">
                  <div className="flex items-center w-11 h-auto rounded-full">
                    <img src={item.image} alt="" className="p-1" />
                  </div>
                  <div className="ml-3 w-full h-fit">
                    <h1 className="font-semibold lg:text-lg text-primary">
                      {item.title}
                    </h1>
                <div className="w-full h-fit flex justify-between items-end">
                  <p className="lg:max-w-full md:max-w-full max-w-44 lg:text-xs text-[10px] text-primary">
                    {item.subtitle}
                  </p>
                  <p className="lg:w-full text-right lg:text-xs text-[10px] text-primary">
                    {item.date}
                  </p>
                </div>
                  </div>
                </div>
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
