import React from 'react';
import classes from './Avatar.module.css';

const avatar = (props) => {
    const contentStyle = props.active ?
        `${classes.avatar} ${classes.active} clearfix` : `${classes.avatar} clearfix`

    return (
        <div className={contentStyle} />
    )
}

export default avatar;