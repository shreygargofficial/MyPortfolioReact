import React from "react";
import { BioStyle } from "./Bio.style.js";
import { experienceCalculation } from '../../Utils/experience.js'
import { css } from "aphrodite";

function Bio() {
  return (
  
  <section className={css(BioStyle.main)}>
    <section className={css(BioStyle.flexContainer)}>
      <article className={css(BioStyle.flexedImage)} data-aos="fade-up"  data-aos-delay="100">
        <img src="images/shreyMobile.jpeg" alt="shrey" style={{width:'50%',display:'block',margin:'0 auto'}}/>
      </article>
      <article className={css(BioStyle.flexedText)}  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
      <h1 className={css(BioStyle.heading)}>About Me</h1>
       <div>
       Highly skilled Front-End Developer with {experienceCalculation(new Date('07-01-2019'), new Date())}  of experience in building responsive, high-performance web applications using React and JavaScript. Proficient in developing intuitive user interfaces, enhancing application functionality, and delivering innovative solutions. Experienced in Agile methodologies, DevOps practices, and collaborating with cross-functional teams to meet user needs and business goals.
        <div className={css(BioStyle.cardTag)}><span className={css(BioStyle.cardTagTitle)}>name: </span>Shrey Garg</div>
        <div className={css(BioStyle.cardTag)}><span className={css(BioStyle.cardTagTitle)}>Date of birth: </span>10 June 1997</div>
        <div className={css(BioStyle.cardTag)}><span className={css(BioStyle.cardTagTitle)}>Nationality: </span>Indian</div>
        <div className={css(BioStyle.cardTag)}><span className={css(BioStyle.cardTagTitle)}>E-Mail: </span>shreygargofficial@gmail.com</div>    
       </div>
        </article>
    </section>
   
  </section>);
}

export default Bio;