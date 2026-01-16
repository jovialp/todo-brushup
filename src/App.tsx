import { Routes, Route } from "react-router-dom";
import JavaScript from "./pages/JavaScript";
import Redux from "./pages/Redux";
import NavBar from "./components/NavBar";
import Rtk from "./pages/Rtk";
import Zustand from "./pages/Zustand";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="px-20">
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="/Redux" element={<Redux />} />
          <Route path="/rtk" element={<Rtk />} />
          <Route path="/zustand" element={<Zustand />} />
        </Routes>
      </div>
    </>
  );
}
