import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Musicplayer } from "../index";
const Layout = () => {
  return (
    <>
      <section className="b w-full flex flex-grow bg-black gap-2">
        <Sidebar />
        <Outlet />
      </section>
      <Musicplayer />
    </>
  );
};

export { Layout };
