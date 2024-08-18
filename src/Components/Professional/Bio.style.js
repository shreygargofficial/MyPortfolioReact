import media  from '../../Utils/media';
import {StyleSheet} from 'aphrodite';

export const BioStyle = StyleSheet.create({
    heading:{
        textAlign:'center',
        fontSize:'30px',
        paddingBottom:'20px'

    },
    main:{
        backgroundColor:'rgb(34, 37, 44)',
        padding:'60px 60px',
        color:'#ddd',
        [media.tablet.max]:{
            padding:'10px 10px'
        },
        [media.mobile.max]:{
             padding:'10px 4px'
        }

    },
    flexContainer:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        [media.tablet.max]:{
            display:'block'
        }
    },
    flexedImage:{
        flex:'1',
        alignItems:'center',
        alignContent:'center',
        [media.tablet.max]:{
           width:'200px',
           display:'block',
           margin:'10px auto'
        }
    },
    flexedText:{
        flex:'1',
        fontSize:'15px',
        lineHeight:'1.5',
        padding:'0px 20px',
       
    },
    cardTag:{
        lineHeight:'1',
        // textTransform:'capitalize',
        padding:'10px 0px',
        fontSize:'15px'
    },
    cardTagTitle:{
        fontWeight:'bolder',
        color:'cyan',
        textTransform:'uppercase',
    }
})



