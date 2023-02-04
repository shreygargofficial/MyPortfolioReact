import React from "react";
import {CertificateStyle} from './FitnessCertificate.style'
import {css} from 'aphrodite'
import Footer from "../Shared/Footer";
import {BannerStyle} from './Banner.style'
import { Link } from "react-router-dom";

function FinessCertificates() {
    return ( 
        <>
            <section>
                <h1 className={css(CertificateStyle.heading)}>Fitness Certifications</h1>
                <article className={css(CertificateStyle.ContentContainer)}>
                    <section className={css(CertificateStyle.articleSectionContent)}>
                        <p>
                            <img  className={css(CertificateStyle.quoteImg)} src={`${window.location.origin}/images/quoteLeft.png`} alt="quoteleft" />
                            Shrey Garg has basic knowledge of nutrition and science and he also have certification for the same. 
                            He likes to follow healthy lifestyle like consuming healthy and balanced diet as well as going to gym 
                            <img className={css(CertificateStyle.quoteImg)} src={`${window.location.origin}/images/quoteRight.png`} alt="quoteright" />
                        </p>
                    </section>
                </article>
                <article>
                    <article className={css(CertificateStyle.imageContainer)}>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://www.ude.my/UC-52c3348c-c456-4f8e-8fda-5b048d6db2ce/"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate1.jpeg`} alt="certificate1"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor,CertificateStyle.certificateImageAnchorNordicr)} href="https://drive.google.com/file/d/1Z2JiP8gxmGuGLRt9jM3tivHbR6yvSrFW/view?usp=share_link"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate5.png`} alt="certificate5"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://coursera.org/share/1b37f0bac56c630e50bb5432ad2ba7f3"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate4.jpeg`} alt="certificate4"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://ude.my/UC-ffeebbc2-a3fa-48d3-9781-a13d90fdbec1/"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate2.jpeg`} alt="certificate2"/></a>
                        <a className={css(CertificateStyle.certificateImageAnchor)} href="https://www.ude.my/UC-f59b61aa-72b3-4af7-a1a1-193ffdb94312/"><img className={css(CertificateStyle.certificateImage)} src={`${window.location.origin}/images/certificate3.jpeg`} alt="certificate3"/></a>
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