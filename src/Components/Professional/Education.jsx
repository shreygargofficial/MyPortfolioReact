import React from "react";
import {EducationStyle} from './Education.style'
import { main } from '../Shared/mainStyle.js';
import {css} from 'aphrodite'

function Education() {
    return ( 
        <>
           <section >
           <h2 className={css(main.heading,main.black)}>Education</h2>
                <section className={css(EducationStyle.sectionUnderBanner)}>
                    <section className={css(EducationStyle.bannerTextContainer)}>
                        <div className={css(EducationStyle.imgContainer)}>
                            <img src="images/degree.png" alt="degree" style={{width:'100%'}}/>
                        </div>
                        <div className={css(main.padding1)}>
                            <article className={css(EducationStyle.bannerText)}>
                                <h3>SRM University</h3>
                                <i>July2015 - May2019 </i><br/>
                                <p>Graduation</p>
                                <i>B.Tech IT - 8.4GPA</i><br/>
                                <i>Chennai,Tamil Nadu</i><br/>
                                
                            </article>
                        </div>
                    </section>
                    <section className={css(EducationStyle.bannerTextContainer)}>
                        <div className={css(EducationStyle.imgContainer)}>
                             <img src="images/school.png" alt="school" style={{width:'100%'}}/>
                        </div>
                        <div className={css(main.padding1)}>
                            <article className={css(EducationStyle.bannerText)}>
                                <h3>ILVA School</h3>
                                <i>May2014 - May2015 </i><br/>
                                <p> Higher Secondary Certificate (Class12th) </p>
                                <i>PCM - 80%</i><br/>
                                <i>Indore,Madhya Pradesh</i><br/>
                            </article>
                        </div>
                    </section>
                    <section className={css(EducationStyle.bannerTextContainer)}>
                        <div className={css(EducationStyle.imgContainer)}>
                            <img src="images/school.png" alt="school" style={{width:'100%'}}/>
                        </div>
                        <div className={css(main.padding1)}>
                            <article className={css(EducationStyle.bannerText)}>
                                <h3>VidyaSagar School</h3>
                                <i>May2012 - May2013 </i><br/>
                                <p>Secondary School Certificate (Class 10th) </p>
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