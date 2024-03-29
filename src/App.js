import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing1 from "./Components/Home/Landing1/Landing1";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import Landing2 from "./Components/Home/Landing2/Landing2";
import Landing3 from "./Components/Home/Landing3/Landing3";
import Landing4 from "./Components/Home/Landing4/Landing4";
import Landing5 from "./Components/Home/Landing5/Landing5";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Company/Portfolio/Portfolio";
import ScrollToTop from "./Components/ScrollToTop";
import Team from "./Components/Company/Team/Team";
import Testimonials from "./Components/Company/Testimonials/Testimonials";

function App() {
  let [loading, setLoading] = useState(true);
  let [show, setShow] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [4000]);
  }, []);

  let scrolltOTop = () => {
    window.scrollTo({ top: "0", left: "0", behavior: "smooth" });
  };

  useEffect(() => {
    let handleScroll = () => {
      let currenPos = window.pageYOffset;
      if (currenPos > 20) {
        setShow("block");
      } else {
        setShow("hidden");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="relative">
      {loading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <div className={`fixed right-4 bottom-9 z-50  ${show}`}>
              <button
                onClick={scrolltOTop}
                className="bg-blue-700 text-white p-3 rounded   cursor-pointer"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
              </button>
            </div>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing1 />}></Route>
              <Route path="/index-2" element={<Landing2 />}></Route>
              <Route path="/index-3" element={<Landing3 />}></Route>
              <Route path="/index-4" element={<Landing4 />}></Route>
              <Route path="/index-5" element={<Landing5 />}></Route>
              {/* <Route path="/#key-features" element={<KeyFeatures />}></Route> */}
              <Route path="/about" element={<About />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/testimonials" element={<Testimonials />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}

      {/* <ScrollToTop/> */}
    </div>
  );
}

export default App;
