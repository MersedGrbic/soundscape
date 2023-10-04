import React, { useState } from "react";
import logoImg from "../../assets/soundscape-logo.png";
import homeSvg from "../../assets/home.svg";
import searchSvg from "../../assets/search.svg";
import librarySvg from "../../assets/library.svg";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav
      className={`w-[100%] ${
        isOpen ? "max-w-[350px]" : "max-w-[100px]"
      } bg-main-bg rounded navbar`}
    >
      <ul>
        <li>
          <h1 className="text-3xl text-center">Soundscape.</h1>
        </li>
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-2 p-2 m-2 rounded hover:bg-secondary-bg cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={isOpen ? "40" : "24"}
              viewBox="0 -960 960 960"
              width={isOpen ? "30" : "24"}
              className="fill-white"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            <p className={isOpen ? "" : "hidden"}>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="search"
            className="flex items-center gap-2 p-2 m-2 rounded hover:bg-secondary-bg cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={isOpen ? "40" : "24"}
              viewBox="0 -960 960 960"
              width={isOpen ? "30" : "24"}
              className="fill-white"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <p className={isOpen ? "" : "hidden"}>Search</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="library"
            className="flex items-center gap-2 p-2 m-2 rounded hover:bg-secondary-bg cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={isOpen ? "40" : "24"}
              viewBox="0 -960 960 960"
              width={isOpen ? "30" : "24"}
              className="fill-white"
            >
              <path d="M640-160q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 1.5t19 6.5v-328h200v80H760v360q0 50-35 85t-85 35ZM120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Z" />
            </svg>
            <p className={isOpen ? "" : "hidden"}>Library</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Sidebar };
