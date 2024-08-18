import React from 'react'
import { main } from '../Shared/mainStyle';
import { css } from 'aphrodite';

function Space(props) {
    return (  <div className={css(main.space)}>
       <img src={props.src} style={{ position:'relative',top:'10px'}} alt={props.heading} height={45} width={45}/> {props.heading}
    </div>);
}

export default Space;