import React from "react";
import {CertificateStyle} from './FitnessCertificate.style'
import {css} from 'aphrodite'
import Footer from "../Shared/Footer";
import {BannerStyle} from './Banner.style'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function FinessCertificates() {
    return ( 
        <>
           <Helmet>
            <title>
                Shrey Garg - FitnessCertificate
            </title>
            <meta
                name="description"
                content="Shrey Garg has basic knowledge of nutrition and science and he also have certification for the same"
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>
            <section>
                <h1 className={css(CertificateStyle.heading)}>Fitness Certifications</h1>
                <article className={css(CertificateStyle.ContentContainer)}>
                    <section className={css(CertificateStyle.articleSectionContent)}>
                        <p>
                            <img  className={css(CertificateStyle.quoteImg)} src={`${window.location.origin}/images/quoteLeft.png`} alt="quoteleft-shrey garg" />
                            Shrey Garg has basic knowledge of nutrition and science and he also have certification for the same. 
                            He likes to follow healthy lifestyle like consuming healthy and balanced diet as well as going to gym 
                            <img className={css(CertificateStyle.quoteImg)} src={`${window.location.origin}/images/quoteRight.png`} alt="quoteright-shrey garg" />
                        </p>
                    </section>
                </article>
                <article>
                    <article className={css(CertificateStyle.imageContainer)}>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://www.ude.my/UC-52c3348c-c456-4f8e-8fda-5b048d6db2ce/"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate1.jpeg`} alt="certificate1-shrey garg"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor,CertificateStyle.certificateImageAnchorNordicr)} href="https://drive.google.com/file/d/1Z2JiP8gxmGuGLRt9jM3tivHbR6yvSrFW/view?usp=share_link"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate5.png`} alt="certificate5-shrey garg"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://coursera.org/share/1b37f0bac56c630e50bb5432ad2ba7f3"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate4.jpeg`} alt="certificate4-shrey garg"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://ude.my/UC-ffeebbc2-a3fa-48d3-9781-a13d90fdbec1/"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate2.jpeg`} alt="certificate2-shrey garg"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://www.ude.my/UC-f59b61aa-72b3-4af7-a1a1-193ffdb94312/"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate3.jpeg`} alt="certificate3-shrey garg"/></a>
                    </article>
                </article>
                <Link to={"/personal/healthyandfitclub"}>
                    <div style={{marginBottom:'35px'}} className={css(BannerStyle.arrow)}>
                        Next
                    </div>
                </Link>
            </section>
            <Footer/>
         </>
     );
}

export default FinessCertificates;