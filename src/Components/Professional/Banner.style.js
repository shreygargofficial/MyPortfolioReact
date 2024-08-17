import {StyleSheet} from 'aphrodite';
import media  from '../../Utils/media';

export const BannerStyle = StyleSheet.create({
    bannerContainer :{
        height: '100vh',
        background: 'linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3)),url(images/shreyMain.png)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:"cover",
        filter: "grayscale(100%)",
        position:'relative',
        [media.tablet.mid]:{
            background: 'linear-gradient(45deg,rgba(0,0,6, 0.75),rgba(0,0,0,0.7)),url(images/shreyMobile.jpeg)',
            backgroundPositionX: "center",
            backgroundRepeat:'no-repeat',
            backgroundAttachment: 'fixed',
        }
       
    },
    dotOverlay:{
        position:'absolute',
        top:'0px',
        bottom:'0px',
        left:'0px',
        width:'100vw',
        height:'100vh',
        background:'url(images/dot.png)',
        backgroundRepeat:'repeat',
        backgroundSize:'8px',
        backgroundAttachment: 'fixed',
        [media.tablet.mid]:{
            backgroundSize:'10px',
        }
        
    },
    textOnBanner:{
        background:'rgba(255,255,255,0.8)',
        position:'absolute',
        maxWidth:'700px',
        padding:'40px',
        fontFamily:"'Sofia Sans', sans-serif",
        color:'black',
        fontSize:'34px',
        borderTop:'5px solid yellow',
        top:'40vh',
        right:'100px',
        [media.tablet.mid]:{
            background:'none',
            width:'100%',
            right:'0',
            color:'white',
            fontSize:'24px',
            top:'30vh',
            padding:'20px',
            borderTop:'none',
        },
        [media.mobile.min]:{
            width:'100%',
            top:'20vh',
            right:'0',
            color:'white',
            fontSize:'18px',
            padding:'10px',
            borderTop:'none',
            
        },
         [media.height.max]:{
            fontSize:'24px',
        },
        [media.height.mid]:{
           fontSize:'18px',
       }
    },
    header:{
        fontSize:'50px',
        textAlign:'center',
        fontFamily: "'Rowdies', cursive",
        paddingBottom:'20px',
        textShadow:'6px 4px 3px #999'
    }
})