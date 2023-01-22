import {StyleSheet} from 'aphrodite';
import media  from '../Utils/media';

export const ExperienceStyle = StyleSheet.create({
    header:{
        padding:'80px 0',
        textAlign:'center',
        fontSize:'50px',
        textTransform:'uppercase',
        fontFamily: "'Raleway', sans-serif",
        color:'#fff',
        textShadow:'4px 6px 2px #000',
        [media.tablet.min]:{
            fontSize:'40px'
        },
        [media.mobile.mid]:{
            fontSize:'27px'
        }
    },
    banner:{
        background: 'url(images/experience.jpeg)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed',
        backgroundSize:'cover',
        padding:'20px',
        [media.tablet.min]:{
            fontSize:'20px',
            padding:'10px',
        },
        [media.mobile.mid]:{
            fontSize:'14px',
            padding:'10px',
        },
      
    },
    article:{
        padding:'20px',
        maxWidth:'700px',
        margin: '0 auto',
        [media.tablet.mid]:{
            padding:'0px',
        }
    },
    articleSection:{
        background: 'rgba(255,255,255,0.9)',
        margin:'40px',
        padding:'60px',
        [media.tablet.mid]:{
            padding:'30px',
            margin:'2px',
            marginTop:'40px'
        },
        [media.tablet.min]:{
            padding:'30px',
            background: 'rgba(255,255,255,1)'
           
        }
    }
})
