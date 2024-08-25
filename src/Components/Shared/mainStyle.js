import { StyleSheet } from "aphrodite";
import media from "../../Utils/media";

export const main = StyleSheet.create({
    attachmentS : {
        backgroundAttachment:'scroll'
    },
    attachmentNS : {
        backgroundAttachment:'fixed'
    },
    space:{
        color:'#ddd',
        padding:'50px 0',
        background:'#22252c',
        textAlign:'center',
        fontSize:'50px',
        textTransform:'capitalize',
        fontFamily: "'Raleway', sans-serif",
        textShadow:'4px 6px 2px #000',
        [media.tablet.min]:{
            fontSize:'40px'
        },
        [media.mobile.mid]:{
            fontSize:'27px'
        }
        
    },
    black:{
        color:'#000'
    },
    heading:{
        color:'#ddd',
        padding:'50px 0',
        textAlign:'center',
        fontSize:'50px',
        fontWeight:'300',
        fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    padding1:{
        padding:'0 10px'
    }

});