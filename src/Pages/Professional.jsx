import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../Components/Professional/Banner";
import Education from "../Components/Professional/Education";
import Experience from "../Components/Professional/Experience";
import Projects from "../Components/Professional/Projects";
import Footer from "../Components/Shared/Footer";
import Bio from '../Components/Professional/Bio';
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
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.063519491203!2d75.85402086851624!3d22.709059164844458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1be6ecfcbd%3A0xa6173d3ead7ed3c1!2sChhawni%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1724583787019!5m2!1sen!2sin" height="350" style={{border:0,width:"100vw"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </>
    );
}

export default Professional;