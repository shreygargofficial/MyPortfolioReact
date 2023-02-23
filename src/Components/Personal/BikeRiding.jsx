import React from "react";
import Footer from "../Shared/Footer";
import {css} from 'aphrodite';
import {BikeStyle} from './BikeRiding.style'
import { Helmet } from "react-helmet";

 const BikeRiding = ()=> {
    return (
        <>
        <Helmet>
            <title>
                Shrey Garg - Biking
            </title>
            <meta
                name="description"
                content="Shrey loves bike riding and he always wanted to go on solo long ride on the bike."
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>
            <section className={css(BikeStyle.container)}>
                <h1 className={css(BikeStyle.heading)} >Bike Riding</h1>
                <p className={css(BikeStyle.bikeContent)}>
                    Shrey loves bike riding and he always wanted to go on solo long ride on the bike.
                    His personal favourites bikes are in sports category like KTM and FZ however,
                    he also enjoy riding cruise bikes like avenger, bullet and java
                </p>
                <img className={css(BikeStyle.bikeImage)} alt="shrey garg" src={`${window.location.origin}/images/bike3.png`} />
            </section>
            <Footer/>
        </> 
     );
}

export default BikeRiding;