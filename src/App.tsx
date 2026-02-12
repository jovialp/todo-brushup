import { Routes, Route } from "react-router-dom";
import JavaScript from "./pages/JavaScript";
import Redux from "./pages/Redux";
import NavBar from "./components/NavBar";
import Rtk from "./pages/Rtk";
import Zustand from "./pages/Zustand";

import UserSearch from "./components/UserSearch";
// commented for testing purposes
// import TodoApp from "./pages/TodoApp";
// import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="px-20">
        <Routes>
          <Route path="/" element={
            // <ProtectedRoute>

              // <TodoApp />
              <UserSearch />
            // </ProtectedRoute>
          } />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="/Redux" element={<Redux />} />
          <Route path="/rtk" element={<Rtk />} />
          <Route path="/zustand" element={<Zustand />} />
        </Routes>
      </div>
    </>
  );
}
