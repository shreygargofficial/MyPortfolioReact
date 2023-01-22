import {StyleSheet} from 'aphrodite';
import media  from '../Utils/media';

export const HobbiesStyle = StyleSheet.create({
    banner:{
        background: 'url(/images/backgroundLightWall.jpeg)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed',
        backgroundSize:'cover',
        padding:'30px',
        
    },
    hobbiesListContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'600px',
        [media.tablet.max]:{
            display: 'block',
            height:'auto',
        }
    },
    hobbiesList:{

        position:'relative',
        width:'400px',
        maxWidth:'400px',
        margin:'0px 10px',
        background:'rgba(255,255,255,0.2)',
        zIndex:'1',
        height:'400px',
        overflow:'hidden',
        [media.tablet.max]:{
           margin:'0 auto',
           marginTop:'20px',
           bottom:'0px',
           display:'block',
           width:'auto',
        }
    },
    hobbiesListHeading:{
        textAlign:'center',
        textTransform:'uppercase',
        fontFamily: "'Rowdies', cursive",
        fontSize:'34px',
        color:'white',
        textShadow:'2px 2px 2px #999',
        fontWeight:'700'
    },
    imgContainerBasket:{
        zIndex:'1',
        position:'absolute',
        bottom:'100px',
        left:'0px',
        right:'0px',
        margin:'0 auto',
        width:'100px',

    },
    imgContainerDumbell:{
        bottom:'200px',
        left:'0px',
        width:'300px',
        display:'flex',
        justifyContent: 'space-around',
        [media.mobile.max]:{
            width:'230px',
        }

    },
    imgContainerMovie:{
        bottom:'0px',
        left:'0px',
        right:'0px',
        width:'100%',
        overflow:'hidden',
    },
    bounce:{
        animationName: {
            '25%':{
                translate:"0px 100px",
            },
            '55%':{
                translate:"0px -100px",
            },
            '75%':{
                translate:"0px 100px",
            },
            '100%':{
                translate:"0px -100px",
            },
        },
        animationIterationCount:'infinite',
        animationDuration:'1.3s',
        animationDirection: 'linear'
    },
    curl1:{
        animationName: {
            '25%':{
                translate:"0px 200px 1000px",
            },
            '55%':{
                translate:"30px 0px 0px",
            },
            '75%':{
                translate:"0px 200px 1000px",
            },
            '100%':{
                translate:"30px 0px 0px",
            },
        },
        animationIterationCount:'infinite',
        animationDuration:'1.7s',
        animationDirection: 'alternate-reverse'
    },
    curl2:{
        animationName: {
            '25%':{
                translate:"0px 200px 1000px",
            },
            '55%':{
                translate:"-30px 0px 0px",
            },
            '75%':{
                translate:"0px 200px 1000px",
            },
            '100%':{
                translate:"-30px 0px 0px",
            },
        },
        animationIterationCount:'infinite',
        animationDuration:'1.7s',
        animationDirection:'alternate-reverse'
    },
    zoom:{
        animationName: {
            '25%':{
                transform: 'scale(1.2)',
            },
            '55%':{
                transform: 'scale(1.5)',
            },
            '75%':{
                transform: 'scale(2)',
            },
            '100%':{
                transform: 'scale(3)',
            },
        },
        animationIterationCount:'infinite',
        animationDuration:'1.7s',
        animationDirection: 'alternate'
    },
    imgBasket:{
        width:'120px'
    },
    imgDumbell:{
        width:'30%',
        [media.mobile.mid]:{
            width:'50px',
        }
    },
    imgMovie:{
     width:'100%',

    }

});