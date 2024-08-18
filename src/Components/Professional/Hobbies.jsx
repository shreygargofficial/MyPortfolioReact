import React,{useContext} from "react";
import {HobbiesStyle} from './Hobbies.style'
import {css} from 'aphrodite'
import { iphoneContext } from '../Shared/IphoneContextProvider.jsx';
import { main } from '../Shared/mainStyle.js';

function Hobbies() {
    const iphoneContextConsumer = useContext(iphoneContext);
    return ( 
        <>
        <section className={iphoneContextConsumer.isIphone ? css(HobbiesStyle.banner,main.attachmentS):css(HobbiesStyle.banner)}>
            <section className={css(HobbiesStyle.hobbiesListContainer)}>
                <article className={css(HobbiesStyle.hobbiesList)}>
                    <div className={css(HobbiesStyle.hobbiesListHeading)}>
                        BasketBall
                    </div>
                    <div className={css(HobbiesStyle.imgContainerBasket,HobbiesStyle.bounce)}>
                        <img className={css(HobbiesStyle.imgBasket)}src="/images/ball.png" alt="basket-shrey garg"/>
                    </div>
                </article>
                <article className={css(HobbiesStyle.hobbiesList)}>
                    <div className={css(HobbiesStyle.hobbiesListHeading)}>
                        Gym
                    </div>
                    <div className={css(HobbiesStyle.imgContainerBasket,HobbiesStyle.imgContainerDumbell)}>
                        <img className={css(HobbiesStyle.imgDumbell,HobbiesStyle.curl1)}src="/images/dumbell.png" alt="dumbell-shrey garg"/>
                        <img className={css(HobbiesStyle.imgDumbell,HobbiesStyle.curl2)}src="/images/dumbell.png" alt="dumbell-shrey garg"/>
                    </div>
                </article>
                <article className={css(HobbiesStyle.hobbiesList)}>
                    <div className={css(HobbiesStyle.hobbiesListHeading)}>
                        Movies
                    </div>
                    <div className={css(HobbiesStyle.imgContainerBasket,HobbiesStyle.imgContainerMovie)}>
                        <img className={css(HobbiesStyle.imgMovie,HobbiesStyle.zoom)}src="/images/movie.jpeg" alt="movie"/>
                    </div>
                </article>
            </section>
        </section>
        </>
     );
}

export default Hobbies;