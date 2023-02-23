import React from "react";
import Banner from "../Components/Personal/Banner";
import { Helmet } from "react-helmet";
import Footer from "../Components/Shared/Footer";

function Personal() {
    return ( 
    <>
        <Helmet>
            <title>
                Shrey Garg - Personal 
            </title>
            <meta
                name="description"
                content="This page contains all the Personal information and achievements of Shrey Garg "
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>
        <Banner/>
        <Footer/>
    </>
     );
}

export default Personal;