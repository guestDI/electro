import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button className={`${classes.Get_started_button} ${props.custom_btn}`} data-toggle="modal"
            data-target="#exampleModalCenter" onClick={props.onClick}>
        {props.title}
    </button>
)

export default button;