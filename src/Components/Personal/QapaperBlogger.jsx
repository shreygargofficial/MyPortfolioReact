import React from "react";
import {BannerStyle} from './Banner.style'
import {css} from 'aphrodite'
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet";
function QapaperBlogger() {
    return ( 
        <>
           <Helmet>
            <title>
                Shrey Garg - QAPAPERBlog
            </title>
            <meta
                name="description"
                content="Shrey Garg Started blogging back in 2020 when pandemic hit and colleges started teaching and conducted exams from home"
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>
        <section className={css(BannerStyle.banner)}>
        <article className={css(BannerStyle.article)}>
            <div>
                <h2 className={css(BannerStyle.heading)} >Blogger at Qapaper</h2>
                <img className={css(BannerStyle.image)} src={`${window.location.origin}/images/qapaper.png`} alt="qapaper-shrey garg"/>
                <p>Shrey started blogging in 2020 when there was a pandemic due to the coronavirus, and the colleges have started teaching and conducting exams from home. This limits the students to download the question papers, so he decided to Write blogs on his job profile, the financial sector, and college.
                </p>
               
                <p>
                    <a target={'_blank'} href="https://www.qapaper.com/blog">www.qapaper.com/blog</a>
                </p>
                   
            </div>
        </article>
        <Link to={"/personal/fitnessCertificate"}><div className={css(BannerStyle.arrow)}>
            Next
        </div>
        </Link>
    </section>
    <Footer/>
    </>
     );
}

export default QapaperBlogger;