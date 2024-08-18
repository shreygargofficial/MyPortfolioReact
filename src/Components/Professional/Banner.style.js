import {StyleSheet} from 'aphrodite';
import media  from '../../Utils/media';

export const BannerStyle = StyleSheet.create({
    bannerContainer :{
        height: '100vh',
        background: 'linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(images/shrey.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'top right',
        backgroundSize:"cover",
        filter: "grayscale(100%)",
        position:'relative',
        [media.mobile.max]:{
            background: 'linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(images/shreyMobile.jpg)',
            backgroundPosition: "top center",
            backgroundRepeat:'no-repeat',
            backgroundSize:"cover",
            backgroundAttachment: 'fixed',
        }
       
    },

    textOnBanner:{
        color:'#ddd',
        position:'absolute',
        top:'27%',
        left:'20%',
        [media.tablet.mid]:{
            top:'40%',
        }
    },
    h4:{
        fontSize:'70px',
        fontWeight:'lighter',
        [media.tablet.mid]:{
            fontSize:'50px',
        },
        [media.mobile.max]:{
            fontSize:'40px',
        }
    },
    h3:{
        boxSizing:'border-box',
        fontSize:'80px',
         fontWeight:'normal',
         [media.tablet.max]:{
            fontSize:'60px',
        },
        [media.mobile.mid]:{
            fontSize:'45px',
        }
    },
    button:{
        boxSizing:'border-box',
        border: '1px solid cyan',
        background: 'none',
        color:'#ddd',
        padding:'4px 4px',
        position:'relative',
        top:'20px',
        fontWeight:'bolder',
        ':hover':{
            cursor:'pointer',
            border:'1px solid red',
            transition:'0.5s'
        }
      
    },  

    p:{
        boxSizing:'border-box',
        padding:'10px 12px',
        border:'1px solid cyan',
        ':hover':{
            border:'1px solid red',
            transition:'0.5s'
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