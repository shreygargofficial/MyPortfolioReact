import React,{useContext} from "react";
import {ExperienceStyle} from './Experience.style'
import {css} from 'aphrodite'
import { iphoneContext } from '../Shared/IphoneContextProvider.jsx';
import { main } from '../Shared/mainStyle.js';
function Experience() {
    const iphoneContextConsumer = useContext(iphoneContext);
    return ( 
        <>
        <section className={iphoneContextConsumer.isIphone ? css(ExperienceStyle.banner,main.attachmentS):  css(ExperienceStyle.banner)}>
            <article className={css(ExperienceStyle.article)}>
            <section className={css(ExperienceStyle.articleSection)}  data-aos="zoom-in" data-aos-duration="400" data-aos-delay="100">
               <h3> Senior Software Developer- Mindera </h3>
                   <div style={{fontSize:'12px'}}> Nov 2021 - Present</div><br/>
                    <b>Trainline Project</b><br/><br/>
                    
                    Trainline is a British digital rail and coach technology platform operating across Europe, offering the most widely used products for train travel.

                    <ul>
                        <li><b>White Label Solutions:</b> Provided web solutions for multiple Train Operating Companies (TOCs) across the UK.</li>
                        <li><b> Platform Migration:</b> Assisted in migrating products from a legacy platform to a modern microservices-based architecture.</li>
                        <li><b> Feature Development:</b> Developed and enhanced features for TOC portals using React and JavaScript.</li>
                        <li><b>End to End Testing:</b> Used Playwright framework write automate E2E test cases</li>
                        <li><b>Internationalization:</b> Utilized react-intl to implement multilingual support in TOC portals.</li>
                        <li> <b>Automation:</b> Created Node.js scripts to automate portalization, improving deployment efficiency.
                        </li>
                    </ul>
                </section>
                <section className={css(ExperienceStyle.articleSection)}  data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
                 <h3>Software Developer-INFOSYS </h3>
                 <div style={{fontSize:'12px'}}>July 2019-Nov 2021 </div><br/>
                    <b>One-Stop Project</b> <br/><br/>
                    
A unified platform developed by Infosys to streamline the process of raising and managing requests for cloud services.
                    <ul>
                        <li>Developed a single-page application (SPA) using React and Redux for state management. </li>
                        <li>Enhanced application performance by optimizing rendering and employing React hooks.</li>
                        <li>Implemented a mobile-first approach to ensure responsive design across devices.</li>
                        <li>Collaborated with designers to ensure designs were both efficient and technically sound. </li>
                        <li>Creating modular, responsive templates using modern CSS techniques and Javascript libraries. </li>
                        <li>Delivered tasks within an Agile Scrum framework, contributing to timely project completion. </li>
                    </ul>
                </section>
          
            </article>
        </section>
        </>
    
     );
}

export default Experience;