import React, { useContext } from 'react';
import {css} from 'aphrodite'
import {BannerStyle} from './Banner.style';
import { iphoneContext } from '../Shared/IphoneContextProvider.jsx';
import { main } from '../Shared/mainStyle.js';
import {resume} from '../../Utils/links.js'
function Banner() {
    const iphoneContextConsumer = useContext(iphoneContext);

    let resumeBtnHandler =()=>{
        window.open(resume, '_blank');
    }
    return ( 
        <section className={iphoneContextConsumer.isIphone ? css(BannerStyle.bannerContainer,main.attachmentS) : css(BannerStyle.bannerContainer,main.attachmentNS)}>
            <article className={css(BannerStyle.textOnBanner)}>
                <h4 className={css(BannerStyle.h4)} 
                  data-aos="flip-left" data-aos-delay="200"
                >Hello, I'm</h4>
                <h3 className={css(BannerStyle.h3)} 
                 data-aos="flip-up" data-aos-delay="400"
                >Shrey Garg</h3>
                <button  data-aos="zoom-in" data-aos-delay="400" className={css(BannerStyle.button)} onClick={resumeBtnHandler}><p className={css(BannerStyle.p)} >Download Resume</p></button>
            </article>
        </section>
     );
}

export default Banner;