import { StyleSheet } from "aphrodite";
import media from '../Utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const projectsStyle = StyleSheet.create({
    banner:{
        background:'url(/images/projects.avif)',
        backgroundAttachment:"fixed",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        padding:'30px',
        [media.tablet.mid]:{
            padding:'30px 5px',
        }

    },
    article:{
        background:'rgba(255,255,255,0.9)',
        maxWidth:'700px',
        color:'black',
        margin:'0 auto',
        marginBottom:'100px',
        padding:'50px 50px',
        ':nth-child(1n) > ul': {
            listStyleType:'lower-latin',
            color:'crimson'
          },
       
        ':nth-child(1n) > ul > li > a': {
            textDecoration: 'none',
            color:'crimson'
          },
          ':nth-child(1n) > ul > li > a:hover': {
            textDecoration: 'none',
            color:'cornflowerblue',
          },
          [media.tablet.mid]:{
            padding:'50px 30px',
          }
    }

})