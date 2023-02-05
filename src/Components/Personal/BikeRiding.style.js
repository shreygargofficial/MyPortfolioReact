import { StyleSheet } from "aphrodite";
import media from "../../Utils/media";


export const BikeStyle = StyleSheet.create({
    container:{
        padding:'20px'
    },
    bikeImage:{
        maxWidth:'700px',
        margin:'0 auto',
        display:'block',
        [media.tablet.mid]:{
            width:'500px'
        },
        [media.tablet.min]:{
            width:'400px'
        },
        [media.mobile.max]:{
            width:'300px'
        },
        [media.mobile.mid]:{
            width:'240px'
        },
    },
    heading:{
        fontSize:'50px',
        textAlign:'center',
        [media.tablet.min]:{
            fontSize:'35px',
            
        },
        [media.mobile.mid]:{
            fontSize:'30px',
        },
    },
    bikeContent:{
        fontSize:'40px',
        lineHeight:'60px',
        fontFamily:"'Sofia Sans', sans-serif",
        padding:'10px',
        margin:"100px 40px",
        [media.tablet.mid]:{
            fontSize:'30px',
            lineHeight:'50px',
            margin:"100px 10px",
        },
        [media.tablet.min]:{
            fontSize:'25px',
            lineHeight:'40px',
        },
        [media.mobile.mid]:{
            fontSize:'18px',
            lineHeight:'30px',
            margin:"100px 2px",
        },
    },

})