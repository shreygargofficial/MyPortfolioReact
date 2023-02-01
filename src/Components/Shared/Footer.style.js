import { StyleSheet } from "aphrodite";
import media from "../../Utils/media";

export const footerStyle = StyleSheet.create({
    footer: {
        background:'#000',
        color:'#fff',
        fontSize:'18px',
        display:'flex',
        padding:'20px',
        [media.tablet.mid]:{
            display:'block',

        }

    },
    sections:{
        width:'33.2%',
        padding:'30px',
    },
    a:{
        
        [media.mobile.max]:{
            fontSize:'16px',
        },
        [media.mobile.min]:{
            fontSize:'12px',
        },
    }

})