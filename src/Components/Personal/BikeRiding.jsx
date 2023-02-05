import React from "react";
import Footer from "../Shared/Footer";
import {css} from 'aphrodite';
import {BikeStyle} from './BikeRiding.style'



 const BikeRiding = ()=> {
    return (
        <>
            <section className={css(BikeStyle.container)}>
                <h1 className={css(BikeStyle.heading)} >Bike Riding</h1>
                <p className={css(BikeStyle.bikeContent)}>
                    Shrey loves bike riding and he always wanted to go on solo long ride on the bike.
                    His personal favourites bikes are in sports category like KTM and FZ however,
                    he also enjoy riding cruise bikes like avenger, bullet and java
                </p>
                <img className={css(BikeStyle.bikeImage)} alt="bikeImage" src={`${window.location.origin}/images/bike3.png`} />
            </section>
            <Footer/>
        </> 
     );
}

export default BikeRiding;