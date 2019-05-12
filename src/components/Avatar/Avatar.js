import React from 'react';
import classes from './Avatar.module.css';

const avatar = (props) => {
    const contentStyle = props.active ?
        `${classes.Avatar} ${classes.Active} clearfix` : `${classes.Avatar} clearfix`

    return (
        <div className={contentStyle} style={{backgroundImage: `url(${props.image})`, }}/>
    )
}

export default avatar;