import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing1 from "./Components/Home/Landing1";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
