import React from "react";
import Banner from "./Components/Banner";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hobbies from "./Components/Hobbies";
import Projects from "./Components/Projects";



function App() {
  return <>
  <section>
      <Banner/>
      <Experience/>
      <Education/>
      <Projects/>
      <Hobbies/>
      <Footer/>
  </section>
  <footer></footer>
  </>
}

export default App;
