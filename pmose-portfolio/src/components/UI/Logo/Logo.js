import React from 'react';

const logo = (props) => (
    <a href={props.link} target="_blank" onMouseOver={props.mouseOver} onMouseLeave={props.mouseLeave} rel="noopener noreferrer">
        {props.children}
    </a>

);

export default logo;