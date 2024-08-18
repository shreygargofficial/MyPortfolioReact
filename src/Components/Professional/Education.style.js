import {StyleSheet} from 'aphrodite';
import media  from '../../Utils/media';

export const EducationStyle = StyleSheet.create({
    banner:{
        background:'url(images/education.jpeg)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
       

    },
    sectionUnderBanner:{
        padding:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [media.tablet.max]:{
            display:'block',
            height:'auto',
            padding:'0px',
        }
    },
    bannerTextContainer:{
        display:'flex',
        overflowX:'scroll',
        [media.tablet.max]:{
            display:'block',
            overflowX:'initial',
        }
    },
    bannerText: {
        padding:'30px',
        width:'600px',
        background:'rgba(0,0,0,0.7)',
        fontSize:'19px',
        color:'white',
        [media.tablet.max]:{
            width:'90%',
            margin:'0 auto',
            position:'relative',
           
        }

    }
})

