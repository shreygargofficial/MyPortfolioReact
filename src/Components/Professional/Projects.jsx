import React,{useContext} from "react";
import {css} from 'aphrodite'
import {projectsStyle} from './Projects.style'
import {ExperienceStyle} from './Experience.style'
import { iphoneContext } from '../Shared/IphoneContextProvider.jsx';
import { main } from '../Shared/mainStyle.js';

function Projects() {
    const iphoneContextConsumer = useContext(iphoneContext);
    return ( 

        <section className={iphoneContextConsumer.isIphone ? css(projectsStyle.banner,main.attachmentS):css(projectsStyle.banner) } >
             <h2 className={css(ExperienceStyle.header)}><img src="icon/project.png" style={{ position:'relative',top:'5px' }} height={45} width={45} alt="project"/>Personal Projects</h2>
             <article className={css(projectsStyle.article)}>
                <ul id="project-ul">
                    <li><a target={'_blank'} href="https://www.qapaper.com">QAPaper - Platform to downlad universities question paper</a>&nbsp;<img src="icon/web.png" style={{ position:'relative',top:'4px' }} height={17} width={17} alt="web shrey"/></li>
                    <li><a target={'_blank'}  href="https://github.com/shreygargofficial/ReachOut">Social Help for needy people</a>&nbsp;<img src="icon/web.png" style={{ position:'relative',top:'4px' }} height={17} width={17} alt="web shrey"/></li>
                    <li><a target={'_blank'} href="https://github.com/shreygargofficial/Water-can">Water Cane delivery App</a>&nbsp;<img src="icon/app.webp" style={{ position:'relative',top:'4px' }} height={17} width={17} alt="app shrey"/></li>
                    <li><a target={'_blank'} href="https://github.com/shreygargofficial/note-sharing-app">Notes Sharing App</a>&nbsp;<img src="icon/web.png" style={{ position:'relative',top:'4px' }} height={17} width={17} alt="web shrey"/></li>
                    <li><a target={'_blank'} href="https://github.com/shreygargofficial/GPACalculatorSRM">GPA calculater app for SRM University</a>&nbsp;<img src="icon/app.webp" style={{ position:'relative',top:'4px' }} height={17} width={17} alt="app shrey"/></li>
                    <li><a target={'_blank'} href="https://github.com/shreygargofficial/TicTAcToe">TicTacToe App</a>&nbsp;<img src="icon/app.webp" style={{ position:'relative',top:'4px' }} height={17} width={17} alt="app shrey"/></li>
                    <li><a target={'_blank'} href="https://github.com/shreygargofficial/Hospital-blood-bank">Blood-donation hospital chain</a>&nbsp;<img src="icon/web.png" style={{ position:'relative',top:'4px' }} height={17} width={17} alt="web shrey"/></li>
                    <li><a target={'_blank'}  href="https://github.com/shreygargofficial/bank-Management-Using-Cpp-File-handling">Bank Management using C++</a></li>

                </ul>
             </article>
        </section>

     );
}

export default Projects;