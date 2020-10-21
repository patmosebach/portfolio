import React from 'react';
import Adj from '../Adj/Adj';
import classes from './Layout.module.css';

const layout = (props) => (
    <Adj>
        <div>toolbar, sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Adj>
);

export default layout;