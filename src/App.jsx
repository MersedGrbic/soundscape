import { useState } from "react";
import { Maincontent, Sidebar, Musicplayer } from "./containers/index";
function App() {
  return (
    <div className="app w-full h-screen flex flex-col justify-between bg-black p-2 gap-2">
      <section className="b w-full flex flex-grow bg-black gap-2">
        <Sidebar />
        <Maincontent />
      </section>
      <section className=" w-full mt-auto ">
        <Musicplayer />
      </section>
    </div>
  );
}

export default App;
