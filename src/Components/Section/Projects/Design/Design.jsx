import React, { useState } from "react";
import { Modal } from "antd";

import {
  Images_project_design1,
  Images_project_design2,
} from "@/assets";

const projectsDesign = [
  {
    id: 1,
    title: "YourNote. App UI Design",
    description: "UI Design for Note App.",
    image: Images_project_design1,
    textColor: "text-[#FB923C]",
    bgColor: "bg-primary",
    borderColor: "border-primary",
    techStack: [
      {
        id: 1,
        name: "Figma",
      },
    ],
    textButton: "View Detail",
  },
  {
    id: 2,
    title: "Weather App UI Design",
    description: "UI Design for Weather App.",
    image: Images_project_design2,
    textColor: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary",
    techStack: [
      {
        id: 1,
        name: "Figma",
      },
    ],
    textButton: "View Detail",
  },
];

export default function Design() {
  const [isModalOpen, setIsModalOpen] = useState(0);

  const showModal = (status) => {
    setIsModalOpen(status);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <div className=" w-full h-full justify-center grid lg:grid-cols-2 gap-16 duration-150">
        {projectsDesign.map((item, index) => (
          <>
            <div
              key={index}
              className="w-full h-fit bg-white p-8 rounded-2xl border border-opacity-20 hover:border-opacity-10 border-primary hover:shadow-md duration-500 grayscale hover:grayscale-0"
            >
              <div className="lg:w-96 w-full h-auto">
                <img
                  key={index}
                  src={item.image}
                  alt="Project Web 1"
                  className={`w-full h-full rounded-xl`}
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
                  className={`w-fit h-fit flex items-center gap-1 hover:gap-1.5 hover:duration-500 duration-300 cursor-pointer hover:border-b ${item.borderColor} border-opacity-50`}
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
      </div> */}

      <div className="animate__FadeIn w-full h-full justify-center grid lg:grid-cols-2 gap-16 duration-150">
        <div className="w-full h-fit bg-white p-8 rounded-2xl border border-opacity-20 border-primary">
          <div className="lg:w-96 w-full h-auto">
            <img
              src={Images_project_design1}
              alt="Project Design 1"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="w-full h-auto mt-5 grid gap-7">
            <div className="w-full h-auto grid gap-5">
              <div className="w-fit h-fit">
                <h1 className="font-semibold text-lg text-primary">
                  UI Design YourNote. App
                </h1>
                <p className="font-light text-xs">
                  UI Design for YourNote. App
                </p>
              </div>
              <div className="w-fit h-fit grid items-center gap-1">
                <h1 className="font-medium text-sm text-primary">
                  Tech Stack
                </h1>
                <div className="w-fit h-fit flex items-center gap-1">
                  <p className="font-light text-[10px] bg-primary bg-opacity-10 border border-primary border-opacity-40 text-primary w-fit h-fit px-1 py-0.5 rounded">
                    Figma
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-fit h-fit flex items-center gap-1 hover:gap-1.5 hover:duration-500 duration-300 cursor-pointer hover:border-b border-primary border-opacity-50"
              onClick={() => showModal(1)}
            >
              <button className="w-fit h-fit text-xs text-primary">
                View Detail
              </button>
              <i className="bi bi-arrow-right-short text-primary"></i>
            </div>
          </div>
        </div>
        <Modal
          centered
          open={isModalOpen === 1 ? true : false}
          onCancel={handleCancel}
          footer={null}
          width={1100}
        >
          <div className="w-full h-full grid lg:gap-8 lg:p-5 gap-3 pt-8 pb-3">
            <div>
              <img
                src={Images_project_design1}
                alt="Project Design 1"
                className="w-full h-full rounded"
              />
            </div>
            <div className="w-full h-auto text-center">
              <h1 className="font-semibold lg:text-lg text-md text-primary">
                UI Design YourNote. App
              </h1>
            </div>
          </div>
        </Modal>

        <div className="w-full h-fit bg-white p-8 rounded-2xl border border-opacity-20 border-primary">
          <div className="lg:w-96 w-full h-auto">
            <img
              src={Images_project_design2}
              alt="Project Design 2"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="w-full h-auto mt-5 grid gap-7">
            <div className="w-full h-auto grid gap-5">
              <div className="w-fit h-fit">
                <h1 className="font-semibold text-lg text-primary">
                  UI Design Weather App
                </h1>
                <p className="font-light text-xs">UI Design for Weather App</p>
              </div>
              <div className="w-fit h-fit grid items-center gap-1">
                <h1 className="font-medium text-sm text-primary">
                  Tech Stack
                </h1>
                <div className="w-fit h-fit flex items-center gap-1">
                  <p className="font-light text-[10px] bg-primary bg-opacity-10 border border-primary border-opacity-40 text-primary w-fit h-fit px-1 py-0.5 rounded">
                    Figma
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-fit h-fit flex items-center gap-1 hover:gap-1.5 hover:duration-500 duration-300 cursor-pointer hover:border-b border-primary border-opacity-50"
              onClick={() => showModal(2)}
            >
              <button className="w-fit h-fit text-xs text-primary">
                View Detail
              </button>
              <i className="bi bi-arrow-right-short text-primary"></i>
            </div>
          </div>
        </div>
        <Modal
          centered
          open={isModalOpen === 2 ? true : false}
          onCancel={handleCancel}
          footer={null}
          width={1100}
        >
          <div className="w-full h-full grid lg:gap-8 lg:p-5 gap-3 pt-8 pb-3">
            <div>
              <img
                src={Images_project_design2}
                alt="Project Design 2"
                className="w-full h-full rounded"
              />
            </div>
            <div className="w-full h-auto text-center">
              <h1 className="font-semibold lg:text-lg text-md text-primary">
                UI Design Weather App
              </h1>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
