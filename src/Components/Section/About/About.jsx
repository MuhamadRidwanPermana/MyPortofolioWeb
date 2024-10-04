import React, { useState } from "react";
import { Popover } from "antd";
import { TittleSection, Experience } from "@/Components";
import { Images_about } from "@/assets";

export default function About() {
  const data = [
    {
      id: 1,
      icon: "uil-award-alt",
      title: "Experience",
      value: "1 Years",
    },
    {
      id: 2,
      icon: "uil-folder-check",
      title: "Completed",
      value: "7 Projects",
    },
    {
      id: 3,
      icon: "bx bx-support",
      title: "Support",
      value: "24/7 hours",
    },
  ];

  const scrollTo = () => {
    window.scrollTo({
      top: document.querySelector(`#learnAbout`).offsetTop,
      behavior: "smooth",
    });
  };

  const scrollTO = () => {
    window.scrollTo({
      top: document.querySelector(`#about`).offsetTop,
      behavior: "smooth",
    });
  };

  const [ShowAbout, setShowAbout] = useState(true);
  const toggleShowAbout = () => {
    setShowAbout(!ShowAbout);

    if (ShowAbout) {
      document.getElementById("detailAbout").classList.remove("hidden");
      scrollTo();
    } else {
      document.getElementById("detailAbout").classList.add("hidden");
      scrollTO();
    }
  };

  const HIMTIKA = (
    <div className="text-center">
      <p className="font-semibold text-primary">
        Informatics Student Association
      </p>
      <p className="text-[10px] italic text-secondary">
        Himpunan Mahasiswa Informatika
      </p>
    </div>
  );

  const UKM = (
    <div className="text-center">
      <p className="font-semibold text-primary">Student Activity Unit</p>
      <p className="text-[10px] italic text-secondary">
        Unit Kegiatan Mahasiswa
      </p>
    </div>
  );

  return (
    <>
      <div id="about" className="h-1 bg-white"></div>
      <section className="w-full h-full flex justify-center lg:px-0 lg:mt-48 lg:mb-72 px-8 my-12">
        <div className="w-full h-full grid gap-16 lg:justify-center">
          <TittleSection title="About Me" subtitle="My Introduction" />

          <div
            id="simpleAbout"
            className="lg:w-fit w-full h-full lg:flex md:flex lg:gap-24 md:gap-0 grid gap-5"
          >
            <div className="w-full h-full flex lg:justify-center">
              <div className="max-w-full lg:max-w-80 md:max-w-80 h-auto">
                <img
                  src={Images_about}
                  alt="image_about"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="lg:w-fit w-full h-full">
              <div className="flex lg:gap-7 gap-5">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-32 border border-secondary border-opacity-50 rounded-lg text-center grid p-3"
                  >
                    <div>
                      <i className={`text-xl text-primary ${item.icon}`}></i>
                      <h2 className="text-xs text-primary font-medium">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-secondary text-[10px]">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="leading-6 text-primary font-normal text-sm lg:w-[30rem] lg:text-start md:text-start text-center">
                  I am a graduate of the Faculty of Information Technology,
                  Informatics study program. During college, I was active in
                  student activities such as{" "}
                  <Popover
                    content={UKM}
                    className="font-semibold cursor-default"
                  >
                    UKM
                  </Popover>{" "}
                  <span className="font-semibold">Tahungoding</span> and served
                  as a{" "}
                  <span className="font-semibold">
                    Frontend Web Development Mentor
                  </span>{" "}
                  and{" "}
                  <Popover
                    content={HIMTIKA}
                    className="font-semibold cursor-default"
                  >
                    {" "}
                    HIMTIKA{" "}
                  </Popover>{" "}
                  served as the{" "}
                  <span className="font-semibold">
                    Coordinator of Research and Development Division
                  </span>
                  . While actively involved in organizations, I learned how to
                  work together as a team and solve problems together.
                </p>
                <button
                  id="buttonLearnMore"
                  className="flex gap-2 hover:gap-3 items-center mt-5 text-xs text-secondary w-fit py-1 border-b border-white hover:border-b hover:border-secondary hover:border-opacity-50 duration-500 hover:pr-3 justify-center lg:mx-0 md:mx-0 mx-auto"
                  onClick={toggleShowAbout}
                >
                  <p>Read more</p>
                </button>
              </div>
            </div>
          </div>
          <div id="detailAbout" className="hidden">
            <Experience />
          </div>
        </div>
      </section>
    </>
  );
}
