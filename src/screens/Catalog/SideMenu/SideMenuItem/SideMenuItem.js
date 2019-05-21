import React from 'react';
import classes from './SideMenuItem.module.css';

const sideMenuItem = (props) => (
    <a href="#" className="list-group-item list-group-item-action disabled">{props.item.name}</a>
)

export default sideMenuItem;
