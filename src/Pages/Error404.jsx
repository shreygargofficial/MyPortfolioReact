import React from "react";
import Footer from "../Components/Shared/Footer";

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
            <section style={style.container}>
                <img src={`${window.location.origin}/images/shreyMobile.jpeg`} style={style.image}/>
                <div style={style.text}>Error 404</div>
            </section>
            <Footer/>
         </>

     );
}

export default Error404;