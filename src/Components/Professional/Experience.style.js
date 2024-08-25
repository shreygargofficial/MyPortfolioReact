import {StyleSheet} from 'aphrodite';
import media  from '../../Utils/media';

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
        background: 'linear-gradient(45deg,rgba(0,0,0,0.5),rgba(0,0,0,0.9)),url(images/blank.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed',
        backgroundSize:'cover',
        padding:'20px',
        [media.tablet.min]:{
            fontSize:'20px',
            padding:'10px',
            paddingBottom:'100px'
        },
        [media.mobile.mid]:{
            fontSize:'14px',
            padding:'20px 10px',
            paddingBottom:'100px'
        },
      
    },
    article:{
        padding:'20px',
        margin: '0 auto',
        [media.tablet.mid]:{
            padding:'0px',
        }
    },
    articleSection:{
        display: 'flex',
        background: 'rgba(255,255,255,0.9)',
        margin:'40px',
        padding:'60px',
        [media.tablet.max]:{
            display:'block',
        },
        [media.tablet.mid]:{
            
            padding:'30px',
            margin:'2px',
            marginTop:'40px'
        },
        [media.tablet.min]:{
            padding:'30px',
           
        }
    },
    articleSectionImg:{
        flex:1,
        display:'flex',
        alignItems:'center',
        padding:'0 20px',
        [media.tablet.max]:{
            padding:'0 100px',
        },
    },
    articleSectionContent:{
        flex:4
    },
    orderReverse:{
        flexDirection: "row-reverse"
    }
})
