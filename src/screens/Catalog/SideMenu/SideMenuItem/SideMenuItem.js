import React from 'react';
import classes from './SideMenuItem.module.css';

const sideMenuItem = (props) => (
    <button type="button"
            className={`${classes.Item} list-group-item list-group-item-action`}>{props.item.name}</button>
)

export default sideMenuItem;
