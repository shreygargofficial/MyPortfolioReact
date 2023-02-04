import { StyleSheet } from "aphrodite";
import media from "../../Utils/media";

const size = "20px"
export const CertificateStyle = StyleSheet.create({
    heading:{
        fontSize:'60px',
        textAlign:'center',
        margin:'50px',
        [media.tablet.mid]:{
            fontSize:'40px',
        },
        [media.mobile.mid]:{
            fontSize:'30px',
        }
    },
    quoteImg: {
        width: size,
        height:size,
        position:'relative',
        top:'-16px'
    },
    ContentContainer:{
        width:'90vw',
        margin:'0 auto',
        padding:"60px",
        marginTop:'20px',
        background:'rgba(255,0,0,0.2)',
        transform:'skew(10deg)',
        [media.tablet.mid]:{
            transform:'skew(0deg)',
            padding:"30px",
        }
    },
    articleSectionContent:{
        transform:'skew(-10deg)',
        fontSize:'30px',
        lineHeight:'60px',
        fontFamily:"'Sofia Sans', sans-serif",
        fontStyle:'italic',
        [media.tablet.mid]:{
            transform:'skew(0deg)',
        },
        [media.mobile.mid]:{
            fontSize:'20px',
            lineHeight:'40px',
        }
    },
    imageContainer:{
        padding:'10px',
        margin:'40px',
        width:'90%',
        margin:'0 auto',
        marginTop:'100px',
        display:'flex',
        flexWrap:'wrap',   
        [media.tablet.mid]:{
            padding:'0px',
            width:'100%',
        },
    },
    certificateImageAnchor:{
        width:'50%',
        [media.tablet.mid]:{
            width:'80%',
            margin:'0 auto',
        },
        [media.mobile.mid]:{
            width:'100%',
            margin:'0 auto',
        },
    },
    certificateImageAnchorNordicr:{
        width:'30%',
        [media.tablet.mid]:{
            width:'80%',
            margin:'0 auto',
        },
        [media.mobile.mid]:{
            width:'100%',
            margin:'0 auto',
        },
    },
    certificateImage:{
        width:'100%',
    }
   
});