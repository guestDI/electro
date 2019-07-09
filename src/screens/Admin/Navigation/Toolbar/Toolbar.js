import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Toolbar.module.css';

const toolbar = () => {

    return(
        <div style={{marginBottom: '20px', marginTop: '10px'}} className={classes.toolbar}>
            <li><NavLink to="dashboard" title="dashboard">Заявки</NavLink></li>
            <li><NavLink to="instruments" title="dashboard">Инструменты</NavLink></li>
        </div>
    )
}

export default toolbar;