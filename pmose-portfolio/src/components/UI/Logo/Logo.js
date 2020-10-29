import React from 'react';

const logo = (props) => (
    <a href={props.link} target="_blank">
        {props.children}
    </a>

);

export default logo;