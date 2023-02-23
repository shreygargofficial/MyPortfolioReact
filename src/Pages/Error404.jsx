import React from "react";
import Footer from "../Components/Shared/Footer";
import { Helmet } from "react-helmet";

const style ={
    container: {
        width:'100vw',
        height:'100vh',
        textAlign:'center',
        margin:'0 auto',
        padding:'50px',
        background:'rgba(0,0,0,0.2)',
        color:'white',
    },
    text:{
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:'40px'
    },
    image:{
        maxWidth:'40%',
        margin:'0 auto'
    }
}
function Error404() {
    return ( 
        <>    
         <Helmet>
            <title>
                Shrey Garg - Error
            </title>
            <meta
                name="description"
                content="Shrey Garg is a front-end developer with having professional experience in 
                ReactJs. He is currently employed in Mindera."
                />
            <meta name="keywords" content="shrey garg, shrey garg personal, professional shrey garg data"/>
        </Helmet>   
            <section style={style.container}>
                <img src={`${window.location.origin}/images/shreyMobile.jpeg`} style={style.image} alt="shrey garg"/>
                <div style={style.text}>Error 404</div>
            </section>
            <Footer/>
         </>

     );
}

export default Error404;