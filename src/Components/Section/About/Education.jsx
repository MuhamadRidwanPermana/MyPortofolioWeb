import React from "react";

import { Man1S_logo, Unsap_logo } from "@/assets";

const data = [
  {
    id: 1,
    image: Man1S_logo,
    title: "MAN 1 Sumedang",
    subtitle: "Religion - Computer Skills",
    date: "2017 - 2020",
  },
  {
    id: 2,
    image: Unsap_logo,
    title: "Universitas Sebelas April",
    subtitle: "Information Technology Faculty - Informatcs, 3.82 GPA",
    date: "2020 - 2024",
  },
];

export default function Education() {
  return (
    <>
      <section className="w-full h-fit grid gap-10 animate__FadeIn">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className="w-full h-fit pb-5 border-b border-primary border-opacity-40"
            >
              <div className="flex justify-between items-end">
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
            </div>
          </>
        ))}
      </section>
    </>
  );
}
