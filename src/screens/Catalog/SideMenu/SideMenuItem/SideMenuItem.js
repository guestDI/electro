import React from 'react';
import classes from './SideMenuItem.module.css';

const sideMenuItem = (props) => {
    function clickSideMenuItem() {
        props.getByCategory(props.item.id)
    }

    return(
        <button type="button" onClick={clickSideMenuItem}
            className={`${classes.Item} list-group-item list-group-item-action`}>{props.item.name}</button>
    )
}

export default sideMenuItem;
