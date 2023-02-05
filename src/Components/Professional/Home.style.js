import { StyleSheet } from "aphrodite";
import media from "../../Utils/media";


export const HomeStyle = StyleSheet.create({

    container:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    sliderContent:{
        textAlign:'center'
        
    },
    paraHeading:{
        fontSize:'39px',
        padding:'10px'
        
    },
    paraContent:{
        fontSize:'19px',
        padding:'10px'
    },
    buttonContainer:{
        padding:'10px',
        margin:'0 auto',
        textAlign:'center'
    },
    button:{
        border:'none',
        background:'Tomato',
        color:'white',
        fontSize:'19px',
        borderRadius:'10px',
        cursor:'pointer',
        padding:'18px',
        marginRight:'30px',
        width:'150px',
        boxShadow:'0px 7px 10px 1px #ccc',
        [media.mobile.max]:{
            marginTop:'10px',
            marginRight:'10px'
        },
        ':hover':{
            boxShadow:'0px 0px 10px 1px #ccc',
        }
    },
    img:{
        width:'300px',
        display:'block',
        margin:'0 auto',
    },
    scale:{
        animationName: {
            '25%':{
                transform: 'scale(1)',
            },
            '55%':{
                transform: 'scale(1.1)',
            },
            '75%':{
                transform: 'scale(1)',
            },
            '100%':{
                transform: 'scale(1.1)',
            },
        },
        animationIterationCount:'infinite',
        animationDuration:'1.7s',
        animationDirection:'alternate',
        animationTimingFunction:'linear'
    }
  
  
})