import React from "react";
import Banner from "../Components/Professional/Banner";
import Education from "../Components/Professional/Education";
import Experience from "../Components/Professional/Experience";
import Hobbies from "../Components/Professional/Hobbies";
import Projects from "../Components/Professional/Projects";
import Footer from "../Components/Shared/Footer";

function Professional() {
    return ( 
        <>
         <Banner/>
        <Experience/>
        <Education/>
        <Projects/>
        <Hobbies/>
        <Footer/>
        </>
     );
}

export default Professional;