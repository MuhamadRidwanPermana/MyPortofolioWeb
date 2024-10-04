import React from "react";

import { TittleSection } from "@/Components";

const conactMe = [
  {
    id: 1,
    title: "Email",
    icon: "bx bx-envelope",
    link: "mailto:muhammad.ridwan.permana13@gmail.com",
  },
  {
    id: 2,
    title: "Whatsapp",
    icon: "bx bxl-whatsapp",
    link: "https://wa.me/6282216910225",
  },
];

export default function Contact() {
  return (
    <>
    <div id="contact" className="h-1 bg-white"></div>
      <section className="w-full h-full lg:px-0 lg:mb-72 px-8 my-32">
        <div className="w-full h-full">
          <TittleSection title="Contact" subtitle="Get in Touch" />

          <div className="lg:flex md:flex grid gap-7 lg:gap-16 justify-center w-full h-full mt-16">
            {conactMe.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="lg:w-48 w-60 h-fit py-5 rounded-xl border border-secondary grid justify-center text-center lg:hover:w-52 hover:duration-500 duration-500"
              >
                <div className="w-full h-fit flex items-center justify-center gap-3 text-center">
                  <i className={`text-xl text-primary ${item.icon}`}></i>
                  <p className="text-primary font-medium">{item.title}</p>
                </div>
              </a>
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}