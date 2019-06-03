import React from 'react';
import classes from './SideMenuItem.module.css';

const sideMenuItem = (props) => {
    function clickSideMenuItem() {
        props.getByCategory(props.item.id)
    }

    let attachedClasses = `${classes.Item} list-group-item list-group-item-action`;
    if(props.category === props.item.id){
        attachedClasses = `${classes.Item} list-group-item list-group-item-action`;
    }

    return(
        <button type="button" onClick={clickSideMenuItem}
            className={attachedClasses}>{props.item.name}</button>
    )
}

export default sideMenuItem;
