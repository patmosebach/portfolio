import React from 'react';

import classes from './Divide.module.css';

const divide = (props) => {

    let styles = [ classes.Divide ]; 

    if(props.white){
        styles.push(classes.White);
    }

    if(props.black){
        styles.push(classes.Black);
    }
    
    return(
        <div className={styles.join(' ')}>
            {props.children}
        </div>
    );
};

export default divide;