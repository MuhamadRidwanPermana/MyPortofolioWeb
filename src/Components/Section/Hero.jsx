import React from "react";

import { Images_about, cv } from "@/assets";
import { ButtonScrollUp } from "@/Components";

const icons = [
  {
    icon: "uil uil-instagram",
    link: "https://www.instagram.com/rdwn_pe/",
  },
  {
    icon: "uil uil-linkedin-alt",
    link: "https://www.linkedin.com/in/muhamadridwanpermana/",
  },
  {
    icon: "uil uil-github-alt",
    link: "https://github.com/MuhamadRidwanPermana",
  },
];

export default function Hero() {

  class TxtType {
    constructor(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    }

    tick() {
      // ...
    }
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <>
      <section className="relative z-0 w-full h-full flex justify-center lg:px-0 lg:mt-44 px-8 my-32">
        <div className="lg:flex md:flex-row md:justify-between lg:flex-row lg:justify-between lg:w-[80%] flex flex-col-reverse w-full h-full">
          <div className="w-fit lg:h-52 lg:grid md:grid hidden items-center">
            <div className="lg:grid lg:gap-5 md:grid md:gap-5 flex gap-10 text-center">
              {icons.map((item, index) => (
                <a href={item.link} target="_blank" key={index}>
                  <i className={`lg:text-xl text-xl md:text-base text-primary ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2 grid gap-3 md:gap-2 lg:gap-5 lg:mt-0 mt-7 w-full">
            <h1 className="font-semibold lg:text-[2.7rem] md:text-3xl text-[25px] text-primary">
              M Ridwan Permana
            </h1>
            <div className="flex items-center lg:gap-3 gap-5">
              <div className="lg:w-14 w-10 border rounded bg-secondary border-secondary"></div>
              <h2
                className="text-primary font-medium lg:text-xl text-lg typewrite"
                data-period="2000"
                data-type='["Frontend Developer", "Designer"]'
              ></h2>
            </div>
            <div>
              <p className="text-primary text-sm lg:w-3/4">
                Someone who has interests and talents in the world of
                technology, such as{" "}
                <span className="font-semibold">Frontend Web Development</span>{" "}
                and <span className="font-semibold">Design</span>.
              </p>
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 lg:mt-5 mt-10 bg-primary text-white text-sm rounded-xl w-fit h-fit px-5 py-2 font-medium"
              >
                <span>View Resume</span>
                <i className="text-lg uil uil-file-alt"></i>
              </a>
            </div>
            <div className="lg:flex hidden justify-start items-center gap-3">
              <iframe
                className="mouse-scroll"
                src="https://lottie.host/embed/8a6df1c9-e438-4f1b-9c5a-2610ae848ff9/wsbPKfiHGo.json"
              ></iframe>
              <p className="text-primary font-medium text-sm">Scroll Down</p>
            </div>
          </div>

          <div className="lg:w-fit h-full flex gap-5">
            <div className="lg:w-96 md:w-60 h-auto">
              <img src={Images_about} alt="" className="rounded-lg" />
            </div>

            <div className="w-fit grid justify-center items-center">
              <div className="lg:hidden md:hidden grid gap-5 text-center ">
                {icons.map((item, index) => (
                  <a href={item.link} target="_blank" key={index}>
                    <i className={`lg:text-xl text-xl md:text-base text-primary ${item.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ButtonScrollUp id="home" />
      </section>
    </>
  );
}
