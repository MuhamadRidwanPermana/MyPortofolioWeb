import React from "react";

import { Images_about, } from "@/assets";
import { ButtonScrollUp, } from "@/Components";

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

  // window.onscroll = function() {scrollFunction()};
  // function scrollFunction() {
  //   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  //     document.getElementById("buttonUp").classList.remove("showButton");
  //   } else {
  //     document.getElementById("buttonUp").classList.add("showButton");
  //   }
  // }

  class TxtType {
    constructor(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
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
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
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
        <div className="lg:flex lg:flex-row lg:justify-between lg:w-[80%] flex flex-col-reverse w-full h-full">
          <div className="w-fit lg:h-52 lg:grid hidden items-center">
            <div className="lg:grid lg:gap-5 flex gap-10 text-center">
              {icons.map((item, index) => (
                <a href={item.link} target="_blank" key={index}>
                  <i className={`text-xl text-primary ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid gap-3 lg:gap-5 lg:mt-0 mt-7 w-full">
            <h1 className="font-semibold lg:text-[2.7rem] md:text-4xl text-[25px] text-primary">
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
                technology, such as <span className="font-semibold">Frontend Web Development</span> and <span className="font-semibold">Design</span>.
              </p>
              <button className="lg:mt-5 mt-10 bg-primary text-white rounded-xl w-fit h-fit px-5 py-3 font-medium" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector(`#contact`).offsetTop,
                  behavior: "smooth",
                });
              }}>
                Here me
              </button>
            </div>
            <div className="lg:flex hidden justify-start items-center gap-3">
              <iframe
                className="mouse-scroll"
                src="https://lottie.host/embed/8a6df1c9-e438-4f1b-9c5a-2610ae848ff9/wsbPKfiHGo.json"
              ></iframe>
              <p className="text-primary font-medium text-sm">Scroll Down</p>
              {/* <iframe className="arrow-scroll" src="https://lottie.host/embed/4a9b3bcc-7fa5-4d16-91a2-423faed18b79/rfAVAIEHDQ.json"></iframe> */}
            </div>
          </div>

          <div className="lg:w-fit h-full flex gap-5">
            <div className="w-96 h-auto">
              <img src={Images_about} alt="" className="rounded-lg" />
            </div>

            <div className="w-fit grid justify-center items-center">
              <div className="lg:hidden grid gap-5 text-center ">
                {icons.map((item, index) => (
                  <a href={item.link} target="_blank" key={index}>
                    <i className={`text-xl text-primary ${item.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ButtonScrollUp id="home" />

        {/* <div className="fixed z-50 lg:bottom-5 lg:right-5 bottom-20 right-6 opacity-50 animate__fadeIn" id="buttonUp">
          <button
            className="bg-primary text-white rounded-xl w-10 h-10 flex justify-center items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#home").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <i className="uil uil-arrow-up"></i>
          </button>
        </div> */}
      </section>
    </>
  );
}
