import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../Components/Professional/Banner";
import Education from "../Components/Professional/Education";
import Experience from "../Components/Professional/Experience";
import Projects from "../Components/Professional/Projects";
import Footer from "../Components/Shared/Footer";
import Bio from '../Components/Professional/Bio';
import Location from "../Components/Professional/Location";
function Professional() {
    return (
        <>
            <Helmet>
                <title>
                    Shrey Garg - Professional
                </title>
                <meta
                    name="description"
                    content="Shrey Garg is a front-end developer with having professional experience in 
                    ReactJs. He is currently employed in Mindera."
                />
                <meta name="keywords" content="shrey garg, shrey garg official, professional shrey garg data" />
            </Helmet>
            <Banner />
            <Bio />
            <Experience />
            <Education />
            <Projects />
            <Location/>
          
            <Footer />
        </>
    );
}

export default Professional;