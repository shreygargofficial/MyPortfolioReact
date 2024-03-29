import React from "react";
import {css} from 'aphrodite'
import { BannerStyle } from "./Banner.style";
import { Link } from "react-router-dom";

function Banner() {
    return ( 
        <section className={css(BannerStyle.banner)}>
            <article className={css(BannerStyle.article)}>
                <div>
                    <h2 className={css(BannerStyle.heading)} >SHREY GARG</h2>
                    <p>Shrey garg knows both web development, as well as Android development, along with DBMS. </p>
                    <p>
                       
                    </p>
                    <br/>
                    <img className={css(BannerStyle.image)} src={`${window.location.origin}/images/react.png`} alt="react-shrey garg"/>
                    <img className={css(BannerStyle.image)} src={`${window.location.origin}/images/node.png`} alt="node-shrey garg"/>
                    <img className={css(BannerStyle.image)} src={`${window.location.origin}/images/android.png`} alt="android-shrey garg"/>
                    <img className={css(BannerStyle.image)} src={`${window.location.origin}/images/sql.webp`} alt="sql-shrey garg"/>
                    <img className={css(BannerStyle.image)} src={`${window.location.origin}/images/unity.webp`} alt="unity-shrey garg"/>
                </div>
            </article>
            <Link to={"/personal/qapaper"}><div className={css(BannerStyle.arrow)}>
                Next
            </div>
            </Link>
        </section>
     );
}

export default Banner;