import React from 'react';
import {css} from 'aphrodite'
import {BannerStyle} from './Banner.style';
import {experienceCalculation} from '../Utils/experience.js'
function Banner() {
    return ( 
        <section className={css(BannerStyle.bannerContainer)}>
            <section className={css(BannerStyle.dotOverlay)}>
                <article className={css(BannerStyle.textOnBanner)}>
                    <header className={css(BannerStyle.header)}>Shrey Garg</header>
                    Shrey Garg is a front-end developer with having {experienceCalculation(new Date('07-01-2019'),new Date())} of experience in 
                    ReactJs with modern hooks concept along with redux which is flux based architecture. He is currently employed in Mindera with {experienceCalculation(new Date('11-19-2021'),new Date())} years experience, he completed 
                    his graduation from SRM university.
                </article>
            </section>
        </section>
     );
}

export default Banner;