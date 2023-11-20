import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing1 from "./Components/Home/Landing1";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import KeyFeatures from "./Components/Home/KeyFeatures";

function App() {
  let [loading, setLoading] = useState(true);
  let [show, setShow] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [4000]);
  }, []);

 let scrolltOTop=()=>{
  window.scrollTo({top:"0",left:"0",behavior:"smooth"})
 }

 useEffect(()=>{
  let handleScroll=()=>{
    let currenPos=window.pageYOffset
    if(currenPos>20){
      setShow("block")
    }
    else{
      setShow("hidden")
    }

  }
  window.addEventListener("scroll", handleScroll)

  return ()=>{
    window.removeEventListener("scroll", handleScroll)
  }
 })


  
  return (
    <div className="relative">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
        <div className={`fixed right-4 bottom-9 z-50  ${show}`}>
          <button onClick={scrolltOTop} className="bg-blue-700 text-white p-4 rounded   cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
          </button>
        </div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing1 />}></Route>
            <Route path="#key-features" element={<KeyFeatures />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
