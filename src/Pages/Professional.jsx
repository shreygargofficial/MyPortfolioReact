import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../Components/Professional/Banner";
import Education from "../Components/Professional/Education";
import Experience from "../Components/Professional/Experience";
import Hobbies from "../Components/Professional/Hobbies";
import Projects from "../Components/Professional/Projects";
import Footer from "../Components/Shared/Footer";
import Space from "../Components/Professional/Space";
import Bio from '../Components/Professional/Bio';
import Blank from "../Components/Professional/Blank";
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
            <Blank/>
            <Space heading={'Experience'} src="icon/experience.ico" />
            <Experience />
            <Space heading={'Education'} src="icon/book.png" />
            <Education />
            <Space heading={'Personal Projects'} src="icon/project.png" />
            <Projects />
            <Space heading={'Hobbies'} src="icon/hobbies.png" />
            <Hobbies />
            <Footer />
        </>
    );
}

export default Professional;