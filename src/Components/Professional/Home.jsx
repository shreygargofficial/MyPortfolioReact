import React from "react";
import {css} from 'aphrodite'
import {HomeStyle} from './Home.style'
import {  useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()

   let buttonHandler=(url)=>{
        window.scrollTo(0,0);
        navigate(url)

        
    }
    return ( 
   
        <section className={css(HomeStyle.container)}>
            <article className={css(HomeStyle.sliderContent)}>
                    <p className={css(HomeStyle.paraHeading)}>
                        Welcome to Shrey Garg Portfolio
                    </p>
                    <p className={css(HomeStyle.paraContent)}>
                        Choose one of the following Portfolio type
                    </p>
                    <p>
                    <img className={css(HomeStyle.img,HomeStyle.scale)} src="/images/guy.svg" alt="guy"/>
                    </p>
                    <p className={css(HomeStyle.buttonContainer)}>
                       <button onClick={()=>buttonHandler('/professional')} className={css(HomeStyle.button)}>Professional</button>
                       <button onClick={()=>buttonHandler('/personal')} className={css(HomeStyle.button)}>Personal</button>
                       
                    </p>
            </article>
        </section>
);
}

export default Home;