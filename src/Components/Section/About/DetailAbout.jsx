import React from "react";
import { Link } from "react-router-dom";

import { ButtonScrollUp, TittleSection, Footer } from "@/Components";

export default function DetailAbout() {
  return (
    <>
      <div id="about" className="w-full h-fit flex justify-center">
        <div className="w-[90%] h-fit flex justify-start mt-10">
          <Link to="/">
            <button className="flex gap-2 hover:px-3 hover:pr-5 py-2 px-7 w-fit h-fit text-sm text-primary hover:border-b hover:border-secondary hover:duration-500 duration-300">
              <i class="uil uil-angle-left-b"></i>
              <span>Back to Home</span>
            </button>
          </Link>
        </div>
      </div>
      <section className="w-full h-full flex justify-center lg:px-0 lg:mt-32 lg:mb-72 px-8 my-12">
      <div className="w-full h-full grid gap-16 lg:justify-center">
        
        <TittleSection title="About Me" subtitle="Get to Know Me More" />
        </div>
      </section>
      <Footer/>
      <ButtonScrollUp id="about"/>
    </>
  );
}
