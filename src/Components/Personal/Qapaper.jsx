import React from "react";
import {BannerStyle} from './Banner.style'
import {css} from 'aphrodite'
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet";

function Qapaper() {
    return ( 
        <>
         <Helmet>
            <title>
                Shrey Garg - QAPAPER
            </title>
            <meta
                name="description"
                content="Shrey Garg Started Qapaper back in 2017 when he and his roomate find it difficult to search for previous year question papers for
                their subject."
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>
        <section className={css(BannerStyle.banner)}>
        <article className={css(BannerStyle.article)}>
            <div>
                <h2 className={css(BannerStyle.heading)} >Co-Founder of Qapaper</h2>
                <img className={css(BannerStyle.image)} src={`${window.location.origin}/images/qapaper.png`} alt="qapaper-shrey garg"/>
                <p>Started Qapaper back in 2017 when he and his roomate find it difficult to search for previous year question papers for
                    their subject. </p>
                <p>
                   Qapaper is all about viewing and downloading previous year question papers for many universities curently it has SRM, VIT, Wbut, Medicaps and Mumbai University.
                </p>
                <p>
                    Anyone can download previous year question paper in just 4 clicks.
                </p>
                <p>
                    <a target={'_blank'} href="https://www.qapaper.com">www.qapaper.com</a>
                </p>
                   
            </div>
        </article>
        <Link to={"/personal/qapaperblog"}><div className={css(BannerStyle.arrow)}>
            Next
        </div>
        </Link>
    </section>
    <Footer/>
    </>
     );
}

export default Qapaper;