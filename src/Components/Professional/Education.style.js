import {StyleSheet} from 'aphrodite';
import media  from '../../Utils/media';

export const EducationStyle = StyleSheet.create({

    sectionUnderBanner:{
        padding:'20px',
        // width:'800px',
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin:'30px auto',
        marginBottom:'170px',

    },
   Container:{
        display:'flex',
        padding:'0 40px',
        marginTop:'30px',
        [media.tablet.max]:{
            display:'block',

            overflowX:'initial',
        }
    },
   imgContainer:{
        width:'100px',
        height:'100px',
        borderRadius:'50%',
        background:'rgb(135, 206, 235)',
        padding:'10px',
        [media.tablet.max]:{
            display:'block',
            // margin:'0 auto'
        }
   },
    bannerText: {
        fontSize:'19px',
        color:'black',
        [media.tablet.max]:{
            width:'90%',
            margin:'0 auto',
            position:'relative',
           
        }

    }
})

