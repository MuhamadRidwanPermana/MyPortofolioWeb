import React, { useState } from "react";

const menu = [
  // {
  //   id: "home",
  //   name: "Home",
  //   icon: "uil-estate",
  // },
  {
    id: "about",
    name: "About",
    icon: "uil-user",
  },
  {
    id: "skills",
    name: "Skills",
    icon: "uil-award",
  },
  {
    id: "projects",
    name: "Projects",
    icon: "uil-folder",
  },
  {
    id: "contact",
    name: "Contact",
    icon: "uil-envelope",
  },
];

export default function Navbar() {
  const [Menu, setMenu] = useState();
  const handleMenu = (id) => {
    setMenu(id);
  };

  const [Toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!Toggle);

    if (Toggle) {
      document.getElementById("overlay").classList.remove("overlay");
    } else {
      document.getElementById("overlay").classList.add("overlay");
    }
  };

  return (
    <>
      <nav
        id="navbarDesktop"
        className="flex items-center justify-between mx-auto lg:w-full h-16 text-primary lg:px-[10%] px-8 lg:sticky lg:top-0 lg:z-10 z-50 fixed w-full bottom-0 bg-white border-t border-secondary"
      >
        <h1 className="font-medium cursor-pointer text-xl lg:text-lg" id="home">
          Ridwan
        </h1>

        <ul className="lg:flex hidden gap-5 text-primary">
          {menu.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer font-medium hover:text-[#000] transition-all duration-200 ${
                Menu === item.id ? "text-[#000]" : ""
              }`}
              onClick={(e) => {
                handleMenu(item.id);
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector(`#${item.id}`).offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <button className="lg:hidden" onClick={handleToggle}>
          <i className="uil uil-apps text-2xl cursor-pointer lg:hidden z-50"></i>
        </button>
      </nav>

      <nav
        id="navbar"
        className={`lg:hidden ${
          Toggle
            ? "z-50 fixed bottom-0 flex w-full h-fit justify-center items-center px-8 pt-14 pb-10 bg-white border-t border-secondary animate__SlideUp"
            : "hidden animate__SlideUp"
        }`}
      >
        <button
          className="absolute top-1 right-0 left-0"
          onClick={handleToggle}
        >
          <i className="uil uil-minus text-2xl cursor-pointer lg:hidden "></i>
        </button>

        <ul className="flex gap-10 justify-center text-primary">
          {menu.map((item) => (
            <>
              <div
                key={item.id}
                className="flex flex-col gap-1 text-center"
                onClick={(e) => {
                  handleMenu(item.id);
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector(`#${item.id}`).offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <i className={`text-2xl ${item.icon}`}></i>
                <p
                  key={item.id}
                  className={`text-sm cursor-pointer font-medium hover:text-[#000] transition-all duration-200 ${
                    Menu === item.id ? "text-[#1e1e1e]" : ""
                  }`}
                >
                  {item.name}
                </p>
              </div>
            </>
          ))}
        </ul>
      </nav>
      <div
        className="lg:hidden top-0 z-10 w-full h-full duration-500"
        id="overlay"
      ></div>
    </>
  );
}