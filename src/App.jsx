import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import RoutesFile from "./routes";


function App() {
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
