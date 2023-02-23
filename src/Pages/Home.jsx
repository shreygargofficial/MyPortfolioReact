import React from "react";
import {css} from 'aphrodite'
import {HomeStyle} from '../Components/Professional/Home.style'
import {  useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
    const navigate = useNavigate()

   let buttonHandler=(url)=>{
        window.scrollTo(0,0);
        navigate(url)

        
    }
    return ( 
        <>
         <Helmet>
            <title>
                Shrey Garg 
            </title>
            <meta
                name="description"
                content="Shrey Garg is a front-end developer with having professional experience in 
                ReactJs. He is currently employed in Mindera."
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>
        <section className={css(HomeStyle.container)}>
            <article className={css(HomeStyle.sliderContent)}>
                    <p className={css(HomeStyle.paraHeading)}>
                        Welcome to Shrey Garg Portfolio
                    </p>
                    <p className={css(HomeStyle.paraContent)}>
                        Choose one of the following Portfolio type
                    </p>
                    <p>
                    <img className={css(HomeStyle.img,HomeStyle.scale)} src="/images/guy.svg" alt="shrey garg"/>
                    </p>
                    <p className={css(HomeStyle.buttonContainer)}>
                       <button onClick={()=>buttonHandler('/professional')} className={css(HomeStyle.button)}>Professional</button>
                       <button onClick={()=>buttonHandler('/personal')} className={css(HomeStyle.button)}>Personal</button>
                       
                    </p>
            </article>
        </section>
        </>
       
);
}

export default Home;