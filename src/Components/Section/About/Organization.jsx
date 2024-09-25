import React from "react";

import { HIMTIKA_logo, Tahungoding_logo } from "@/assets";

const data = [
  {
    id: 1,
    image: Tahungoding_logo,
    title: "Tahungoding",
    subtitle: "Mentor Frontend Web Development",
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
    title: "Informatics Student Association (HIMTIKA)",
    subtitle: "Coordinator of Research and Development Division",
    date: "August 2022 - August 2023",
    tasks: [
      {
        id: 1,
        name: "Developing Innovation, Directing and facilitating research and development of new ideas that can benefit the organization and members",
      },
      {
        id: 2,
        name: "Managing Research Projects and identifying relevant research opportunities, designing, and managing research projects involving members of the organization",
      },
      {
        id: 3,
        name: "Collaborating with External Parties and building and maintaining relationships with lecturers, alumni, or professionals in the industry who can assist in the development of research projects",
      },
      {
        id: 4,
        name: "Member Training and Development, Preparing training programs and workshops that can improve members' skills in the field of research and development",
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
              <div className="w-full h-fit flex justify-between items-end">
                <div className="w-full h-fit flex justify-start">
                  <div className="flex items-center w-11 h-auto rounded-full">
                    <img src={item.image} alt="" className="p-1" />
                  </div>
                  <div className="ml-3 w-full h-fit">
                    <h1 className="w-full h-fit font-semibold lg:text-lg text-primary">
                      {item.title}
                    </h1>
                    <p className="lg:max-w-full md:max-w-full max-w-44 lg:text-xs text-[10px] text-primary">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="lg:w-full md:w-full text-right lg:text-xs text-[10px] text-primary">
                  {item.date}
                </p>
              </div>
              <div className="mt-3 text-primary">
                <h2 className="font-semibold lg:text-lg text-sm">
                  The responsibilities include:
                </h2>
                <ul className="list-disc ml-5 mt-1 text-sm lg:max-w-[40rem] md:max-w-[40rem] max-w-80 h-fit">
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
