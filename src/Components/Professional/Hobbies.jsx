import React from "react";
import {ExperienceStyle} from './Experience.style'
import {HobbiesStyle} from './Hobbies.style'
import {css} from 'aphrodite'

function Hobbies() {
    return ( 
        <>
        {/* <header className={css(ExperienceStyle.header)}>
            Hobbies
        </header> */}
        <section className={css(HobbiesStyle.banner)}>
            <h2 className={css(ExperienceStyle.header)}><img src="icon/hobbies.png" style={{ position:'relative',top:'10px' }} height={45} width={45} alt="Hobbies-shrey garg"/>Hobbies</h2>
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