import { css } from "aphrodite";
import React,{useContext} from "react";
import { BlankStyle } from "./Blank.style";
import { iphoneContext } from '../Shared/IphoneContextProvider.jsx';
import { main } from '../Shared/mainStyle.js';

function Blank() {
    const iphoneContextConsumer = useContext(iphoneContext);
    return ( 
    <section className={iphoneContextConsumer.isIphone ? css(BlankStyle.banner,main.attachmentS) :css(BlankStyle.banner,main.attachmentNS)}>

    </section> 
     );
}

export default Blank;