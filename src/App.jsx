import { useState } from "react";
import {
  Home,
  Sidebar,
  Musicplayer,
  Layout,
  Search,
  Library,
} from "./containers/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app w-full h-screen flex flex-col justify-between bg-black p-2 gap-2">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
