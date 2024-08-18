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
    padding1:{
        padding:'10px'
    }

});