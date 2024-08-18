import React,{useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesFile from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      // disable: "phone",
      once:false,
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return <>
  <section>
    <BrowserRouter>
       <RoutesFile/>
    </BrowserRouter>
  </section>
  <footer></footer>
  </>
}

export default App;
