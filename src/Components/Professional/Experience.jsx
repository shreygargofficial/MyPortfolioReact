import React from "react";
import {ExperienceStyle} from './Experience.style'
import {css} from 'aphrodite'
function Experience() {
    return ( 
        <>
        <section className={css(ExperienceStyle.banner)}>
        <h2 className={css(ExperienceStyle.header)}><img src="icon/experience.ico" style={{ position:'relative',top:'10px' }} height={45} width={45} alt="experience-shrey garg"/>Experience </h2>
            <article className={css(ExperienceStyle.article)}>
                <section className={css(ExperienceStyle.articleSection)} >
                 <h3>DIGITAL SPECIALIST ENGINEER AT INFOSYS </h3><br/>
                    <i>July 2019-Nov 2021 </i><br/><br/>
                    <b>As a Front End Developer in ONESTOP project my core responsibilities were:</b> <br/><br/>
                    <ul>
                        <li>Building stable and maintainable codebases using React </li>
                        <li>Implementing mobile first approach to existing website </li>
                        <li>Collaborating with designers to ensure designs are efficient and technically sound. </li>
                        <li>Understanding the wireframe design provided by the design team for the new component assigned to me. </li>
                        <li>Creating modular, responsive templates using modern CSS techniques and Javascript libraries. </li>
                        <li>Delivered task using Agile scrum. </li>
                    </ul>
                </section>
            <section className={css(ExperienceStyle.articleSection)}>
               <h3> Agile Developer at Mindera </h3><br/>
                   <i> Nov 2021 - Present</i><br/><br/>
                    <b>As a Front End Developer in TRAINLINE project my core responsibilities are: </b><br/><br/>
                    <ul>
                        <li> Worked on agile based development for React components</li>
                        <li> Worked on modern React version with Server Side Rendering capabilities</li>
                        <li> Used CSS in Javascript based library like Aphrodite</li>
                        <li>Involved in Portalization of TOC’s (Train Operating Companies) with the help of  react-intl library </li>
                        <li>Followed Redux architecture with Redux-observable as a middleware</li>
                        <li>Used Redux-Form library for keeping all forms values in sync with redux state</li>
                    </ul>
                </section>
            </article>
        </section>
        </>
    
     );
}

export default Experience;