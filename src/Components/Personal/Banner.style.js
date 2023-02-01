import { StyleSheet } from "aphrodite";
import media from "../../Utils/media";

export const BannerStyle = StyleSheet.create({
    banner:{
       minHeight:'900px',
       overflow:'hidden',
       padding:'30px',
       position:'relative',
       [media.mobile.max]:{
        padding:'10px',
        },
    },
    heading:{
        fontSize:'60px',
        marginBottom:'60px',
        [media.tablet.max]:{
            fontSize:'50px',
        },
        [media.mobile.max]:{
            fontSize:'30px',
        },
    },
    article:{
        padding:'100px',
        border:'20px solid tomato',
        borderBottom:'none',
        fontSize:'40px',
        lineHeight:'60px',
        position:'relative',
        fontFamily:"'Sofia Sans', sans-serif",
        [media.tablet.max]:{
            padding:'60px',
            fontSize:'30px',
        },
        [media.mobile.max]:{
            padding:'20px',
            fontSize:'20px',
        },
        [media.mobile.mid]:{
            padding:'10px',
            fontSize:'18px',
        },
        ':after':{
            content:'""',
            position:'absolute',
            bottom:'0px',
            left:'0',
            height:'20px',
            width:'500px',
            background:'tomato',
            [media.tablet.max]:{
                width:'300px',
            },
            [media.mobile.mid]:{
                width:'100px',
            }

        }
    },
    image:{
        width:'100px'
    },
    arrow:{
        background:'tomato',
        padding:'20px',
        height:'60px',
        width:'100px',
        position:'relative',
        marginTop:'100px',
        color:'black',
        float:'right',
        textDecoration:'none',
        '::after':{
            position: 'absolute',
            transform:'rotate(35deg)',
            right:'-15px',
            top:'-10px',
            content:'""',
            background:'white',
            width:'60px',
            height:'30px'
        },
        '::before':{
            position: 'absolute',
            transform:'rotate(-25deg)',
            right:'-15px',
            bottom:'-20px',
            content:'""',
            background:'white',
            width:'60px',
            height:'30px'
        },

    }
})