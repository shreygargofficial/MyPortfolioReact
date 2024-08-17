import React,{useContext} from "react";
import {ExperienceStyle} from './Experience.style'
import {EducationStyle} from './Education.style'
import { iphoneContext } from '../Shared/IphoneContextProvider.jsx';
import { main } from '../Shared/mainStyle.js';
import {css} from 'aphrodite'

function Education() {
    const iphoneContextConsumer = useContext(iphoneContext);
    return ( 
        <>
           <section className={iphoneContextConsumer.isIphone ? css(EducationStyle.banner,main.attachmentS) :css(EducationStyle.banner,main.attachmentNS)} >
           <h2 className={css(ExperienceStyle.header)}><img src="icon/book.png" style={{ position:'relative',top:'10px' }} height={45} width={45} alt="education-shrey garg"/>Education</h2>
                <section className={css(EducationStyle.sectionUnderBanner)}>
                    <section className={css(EducationStyle.bannerTextContainer)}>
                        <div>
                            <article className={css(EducationStyle.bannerText)}>
                                <h3>SRM University</h3><br/>
                                <i>July2015 - May2019 </i><br/><br/>
                                <p>Shrey did his graduation from SRM Institute of Science & Technology</p><br/>
                                <i>B.Tech IT - 8.4GPA</i><br/>
                                <i>Chennai,Tamil Nadu</i><br/>
                                
                            </article>
                        </div>
                        <div>
                            <article className={css(EducationStyle.bannerText)}>
                                <h3>ILVA School</h3><br/>
                                <i>May2014 - May2015 </i><br/><br/>
                                <p>Shrey did his Higher Secondary Certificate (Class12th) from ILVA Hr Sec School </p><br/>
                                <i>PCM - 80%</i><br/>
                                <i>Indore,Madhya Pradesh</i><br/>
                            </article>
                        </div>
                        <div>
                            <article className={css(EducationStyle.bannerText)}>
                                <h3>VidyaSagar School</h3><br/>
                                <i>May2012 - May2013 </i><br/><br/>
                                <p>Shrey did his Secondary School Certificate (Class 10th) from VidyaSagar School </p><br/>
                                <i>8.6CGPA </i><br/>
                                <i>Indore,Madhya Pradesh</i><br/>
                            </article>
                        </div>
                    </section>
                </section>
               
               
            </section>
        </>
     );
}

export default Education;