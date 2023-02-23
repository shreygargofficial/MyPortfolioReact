import React from "react";
import {BannerStyle} from './Banner.style'
import {css} from 'aphrodite'
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet";

function HealthyAndFitClub() {
    return ( 
        <>
          <Helmet>
            <title>
                Shrey Garg - HealthyAndFitClub
            </title>
            <meta
                name="description"
                content="Shrey Garg Started HealthyAndFitClub back in 2023 where I share my knowledge and experience of living healthy lifestyle."
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>
        <section className={css(BannerStyle.banner)}>
        <article className={css(BannerStyle.article)}>
            <div>
                <h2 className={css(BannerStyle.heading)} >Founder & Blogger of HealthyAndFitClub</h2>
                <img className={css(BannerStyle.image2)} src={`${window.location.origin}/images/HealthyAndFitClub.png`} alt="healthyAndFitClub-shrey garg"/>
                <p>Started HealthyAndFitClub back in 2023 where I share my knowledge and experience of living healthy lifestyle, nutrition and food recipes  </p>
               
                <p>
                    <a target={'_blank'} href="https://www.healthyAndFitClub.com">www.healthyAndFitClub.com</a>
                </p>
                   
            </div>
        </article>
        <Link to={"/personal/bikeriding"}><div className={css(BannerStyle.arrow)}>
            Next
        </div>
        </Link>
    </section>
    <Footer/>
    </>
     );
}

export default HealthyAndFitClub;