import { useEffect, useState } from "react";
// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "swiper/css";

import Header from "./pages/Header";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import Main from "./pages/Main";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);
  return (
    <>
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </>
  );
}

export default App;
