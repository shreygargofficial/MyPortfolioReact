import React, { useContext } from 'react';
import {css} from 'aphrodite'
import {BannerStyle} from './Banner.style';
import {experienceCalculation} from '../../Utils/experience.js'
import { iphoneContext } from '../Shared/IphoneContextProvider.jsx';
import { main } from '../Shared/mainStyle.js';
function Banner() {
    const iphoneContextConsumer = useContext(iphoneContext);
    return ( 
        <section className={iphoneContextConsumer.isIphone ? css(BannerStyle.bannerContainer,main.attachmentS) : css(BannerStyle.bannerContainer,main.attachmentNS)}>
            <section className={css(BannerStyle.dotOverlay)}>
                <article className={css(BannerStyle.textOnBanner)}>
                    <header className={css(BannerStyle.header)}>Shrey Garg</header>
                      Highly skilled Front-End Developer with {experienceCalculation(new Date('07-01-2019'),new Date())}  of experience in building responsive, high-performance web applications using React and JavaScript. Proficient in developing intuitive user interfaces, enhancing application functionality, and delivering innovative solutions. Experienced in Agile methodologies, DevOps practices, and collaborating with cross-functional teams to meet user needs and business goals.
                </article>
            </section>
        </section>
     );
}

export default Banner;