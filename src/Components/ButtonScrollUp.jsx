import React from "react";

export default function ButtonScrollUp( { id } ) {

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("buttonUp").classList.remove("showButton");
    } else {
      document.getElementById("buttonUp").classList.add("showButton");
    }
  }

  return (
    <div
      className="fixed z-50 lg:bottom-5 lg:right-5 bottom-20 right-6 opacity-50 animate__fadeIn"
      id="buttonUp"
    >
      <button
        className="bg-primary text-white rounded-xl w-10 h-10 flex justify-center items-center"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector(`#${id}`).offsetTop,
            behavior: "smooth",
          });
        }}
      >
        <i className="uil uil-arrow-up"></i>
      </button>
    </div>
  );
}