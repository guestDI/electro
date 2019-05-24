import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button className={`${classes.Get_started_button} ${props.Custom_btn}`} data-toggle="modal" data-target="#exampleModalCenter" >
        {props.title}
    </button>
)

export default button;